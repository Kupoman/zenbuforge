/* eslint no-param-reassign: "off" */

import { PlatformIO, VertexLayout } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

import * as gltfUtils from './GltfUtils.mjs';

const gltfIo = new PlatformIO();
gltfIo.registerExtensions(ALL_EXTENSIONS);
gltfIo.setVertexLayout(VertexLayout.SEPARATE);

class Exporter {
  constructor() {
    this.results = null;

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

  async exportProject(project) {
    const encoder = new TextEncoder();
    this.results = encoder.encode(JSON.stringify(project, null, 2));
    return this;
  }

  async exportGltf(project) {
    const gltf = JSON.parse(JSON.stringify(project));
    gltfUtils.COLLECTION_PROPS.forEach((prop) => {
      gltf[prop] = Object.values(gltf[prop] ?? {});
    });
    gltf.extensions.KHR_lights_punctual.lights = Object.values(
      gltf.extensions.KHR_lights_punctual.lights ?? {},
    );
    gltfUtils.toArrayRefs(gltf);

    const doc = await gltfIo.readJSON({
      json: gltf,
    });

    this.results = await gltfIo.writeBinary(doc);
    return this;
  }
}

export default Exporter;
