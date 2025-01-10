import {
  NoBlending,
  ShaderMaterial,
  UniformsUtils,
} from 'three';

import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';

const CopyShader = {
  name: 'CopyShader',
  uniforms: {
    tDiffuse: { value: null },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D( tDiffuse, vUv );
    }`,
};

class CopyDepthPass extends Pass {
  constructor() {
    super();

    const shader = CopyShader;

    this.uniforms = UniformsUtils.clone(shader.uniforms);
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      blending: NoBlending,
    });
    this.material.depthWrite = false;

    this.needsSwap = true;
    this.fsQuad = new FullScreenQuad(this.material);
  }

  render(renderer, writeBuffer, readBuffer) {
    this.uniforms.tDiffuse.value = readBuffer.texture;

    renderer.setRenderTarget(writeBuffer);
    this.fsQuad.render(renderer);
  }

  dispose() {
    this.renderTarget.dispose();
    this.material.dispose();
    this.fsQuad.dispose();
  }
}

export default CopyDepthPass;
