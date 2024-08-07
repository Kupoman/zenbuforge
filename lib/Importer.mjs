/* eslint no-param-reassign: "off" */

import { PlatformIO, VertexLayout } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

import * as utils from './Utils.mjs';

const decoder = new TextDecoder();
const gltfIo = new PlatformIO();
gltfIo.registerExtensions(ALL_EXTENSIONS);
gltfIo.setVertexLayout(VertexLayout.SEPARATE);

function arrayToDataUriNode(array, mimeType) {
  return `data:${mimeType};base64,${Buffer.from(array).toString('base64')}`;
}

function arrayToDataUriWeb(array, mimeType) {
  const blob = new Blob([array], { type: mimeType });
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  reader.readAsDataURL(blob);
  return promise;
}

const arrayToDataUri = utils.isNodeEnv() ? arrayToDataUriNode : arrayToDataUriWeb;

function loadFilesIntoDocuments(fileMap, logger) {
  const binaryFiles = [];
  const jsonFiles = [];
  const resources = {};

  fileMap.forEach((fileData) => {
    if (fileData.name.match(/\.(glb)$/)) {
      binaryFiles.push(fileData.buffer);
    } else if (fileData.name.match(/\.(gltf)$/)) {
      jsonFiles.push(fileData.buffer);
    } else {
      resources[fileData.name] = fileData.buffer;
    }
  });

  let ioPromises = binaryFiles.map((buffer) => gltfIo.readBinary(buffer));
  ioPromises = ioPromises.concat(jsonFiles.map((buffer) => gltfIo.readJSON({
    json: JSON.parse(decoder.decode(buffer)),
    resources,
  })));

  ioPromises = ioPromises.map((p) => p.then((doc) => doc.setLogger(logger)));

  return Promise.all(ioPromises);
}

function transformDocuments(docs) {
  return Promise.all(docs.map((doc) => doc.transform()));
}

function embedUris(jsonDocs) {
  const promises = [];
  jsonDocs.forEach((jsonDoc) => {
    const { json, resources } = jsonDoc;
    (json.buffers ?? []).forEach((gltfBuffer) => {
      promises.push(
        Promise.resolve()
          .then(() => arrayToDataUri(resources[gltfBuffer.uri], 'application/octet-stream'))
          .then((uri) => gltfBuffer.uri = uri),
      );
    });

    (json.images ?? []).forEach((gltfImage) => {
      promises.push(
        Promise.resolve()
          .then(() => arrayToDataUri(resources[gltfImage.uri], 'image/png'))
          .then((uri) => gltfImage.uri = uri),
      );
    });
  });
  return Promise.all(promises).then(() => jsonDocs);
}

function fillMaterialDefaults(material) {
  material.pbrMetallicRoughness ??= {};
  material.pbrMetallicRoughness.baseColorFactor ??= [1.0, 1.0, 1.0, 1.0];
  material.pbrMetallicRoughness.metallicFactor ??= 1.0;
  material.pbrMetallicRoughness.roughnessFactor ??= 1.0;
}

function fillDefaults(jsonDoc) {
  const { json } = jsonDoc;
  (json.materials ?? []).forEach((m) => fillMaterialDefaults(m));
  return jsonDoc;
}

class Importer {
  constructor() {
    this.results = [];

    this.debugs = [];
    this.errors = [];
    this.messages = [];
    this.warnings = [];

    this.logger = {
      debug: (s) => this.debugs.push(s),
      error: (s) => this.errors.push(s),
      info: (s) => this.messages.push(s),
      warn: (s) => this.warnings.push(s),
    };
  }

  processFileMap(fileMap) {
    return Promise.resolve()
      .then(() => loadFilesIntoDocuments(fileMap, this.logger))
      .then((docs) => transformDocuments(docs))
      .then((docs) => Promise.all(docs.map((d) => gltfIo.writeJSON(d))))
      .then((jsonDocs) => embedUris(jsonDocs))
      .then((jsonDocs) => jsonDocs.map((d) => fillDefaults(d)))
      .then((jsonDocs) => this.results = this.results.concat(jsonDocs.map((d) => d.json)))
      .then(() => this);
  }
}

export default Importer;
