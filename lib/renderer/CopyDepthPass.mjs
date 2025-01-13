import {
  NoBlending,
  ShaderMaterial,
  UniformsUtils,
  Color,
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
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D( tDiffuse, vUv );
    }`,
};

const BackgroundShader = {
  name: 'BackgroundShader',
  uniforms: {
    color: { value: new Color(0x88ff00) },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      gl_Position.z = 0.99999;
    }`,
  fragmentShader: /* glsl */`
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(color, 1.0);
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

    this.backgroundUniforms = UniformsUtils.clone(BackgroundShader.uniforms);
    this.backgroundMaterial = new ShaderMaterial({
      uniforms: this.backgroundUniforms,
      vertexShader: BackgroundShader.vertexShader,
      fragmentShader: BackgroundShader.fragmentShader,
      blending: NoBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.backgroundQuad = new FullScreenQuad(this.backgroundMaterial);
    this.background = new Color(0x000000);
  }

  render(renderer, writeBuffer, readBuffer) {
    this.uniforms.tDiffuse.value = readBuffer.texture;
    this.backgroundUniforms.color.value = this.background;

    renderer.setRenderTarget(writeBuffer);
    this.fsQuad.render(renderer);
    this.backgroundQuad.render(renderer);
  }

  dispose() {
    this.renderTarget.dispose();
    this.material.dispose();
    this.fsQuad.dispose();
  }
}

export default CopyDepthPass;
