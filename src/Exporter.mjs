/* eslint no-param-reassign: "off" */

import { PlatformIO, VertexLayout } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

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
}

export default Exporter;
