/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

import * as THREE from 'three';
import { Context, Results } from 'zf-data';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { OutlinePass } from './OutlinePass.js';
import CopyDepthPass from './CopyDepthPass.mjs';

import CameraControls from './CameraControls.mjs';
import ThreeTranslator from './ThreeTranslator.mjs';

THREE.ColorManagement.enabled = true;

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

class Renderer {
  loadThemeColor(key) {
    if (!(key in this.settings.colors)) {
      throw new Error(`No theme color with key ${key}`);
    }
    const color = new THREE.Color(`#${this.settings.colors[key]}`);
    color.convertLinearToSRGB();
    return color;
  }

  init() {
    return new Results();
  }

  constructor(canvas, settings) {
    this.canvas = canvas;
    this.settings = settings;

    this.context = new Context();
    this.context.enableProjectSession();
    this.context.enableScratchSession();

    this.raycaster = new THREE.Raycaster();
    this.renderer = null;
    this.renderTarget = null;
    this.finalTarget = null;
    this.composer = null;
    this.gltf = {};
    this.exposure = 12.0;

    const gridRadius = 100;
    const cellSize = 1;
    this.widgetGrid = new THREE.GridHelper(
      2 * gridRadius * cellSize,
      gridRadius,
      this.loadThemeColor('base03'),
      this.loadThemeColor('base03'),
    );
    this.widgetGrid.position.setY(-0.001);
    this.widgetAxes = new THREE.AxesHelper(gridRadius * cellSize);
    this.widgetAxes.setColors(
      this.loadThemeColor('base08'),
      this.loadThemeColor('base0B'),
      this.loadThemeColor('base0D'),
    );

    this.widgetScene = new THREE.Scene();
    this.widgetScene.add(this.widgetGrid);
    this.widgetScene.add(this.widgetAxes);

    this.translator = new ThreeTranslator();

    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    if (this.canvas) {
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.NeutralToneMapping;
      this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
      this.renderer.physicallyCorrectLights = true;
      this.renderer.autoClear = false;

      const scenePass = new RenderPass(null, null);

      this.outlinePass = new OutlinePass(new THREE.Vector2(1, 1), null, this.camera);
      this.outlinePass.visibleEdgeColor = this.loadThemeColor('base0A');
      this.outlinePass.hiddenEdgeColor = this.loadThemeColor('base02');
      this.outlinePass.edgeGlow = 1.0;
      this.outlinePass.edgeThickness = 1.0;
      this.outlinePass.edgeStrength = 2.0;
      this.outlinePass.downSampleRatio = 2;

      const outputPass = new OutputPass();

      this.copyDepthPass = new CopyDepthPass();

      this.widgetPass = new RenderPass(this.widgetScene, this.camera);
      this.widgetPass.clear = false;

      this.composer = new EffectComposer(this.renderer);
      this.composer.renderToScreen = true;
      this.composer.addPass(scenePass);
      this.composer.addPass(outputPass);
      this.composer.addPass(this.copyDepthPass);
      this.composer.addPass(this.widgetPass);
      this.composer.addPass(this.outlinePass);

      this.controls = new CameraControls(this.camera, this.renderer.domElement);
      this.controls.rollSpeed = 2;
      this.controls.movementSpeed = 5;
    } else {
      this.renderer = null;
      this.composer = null;
      this.controls = null;
    }
  }

  resize(viewport) {
    const {
      x,
      y,
      width,
      height,
    } = viewport;

    if (this.renderer) {
      this.renderer.setViewport(x, y, width, height);
    }
    if (this.composer) {
      this.composer.setSize(width, height);
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update(updates) {
    this.context.update(updates);

    if (!this.context.scratchSession.guiCaptureMouse) {
      this.controls.update(this.context.scratchSession.dt);
    }

    const results = new Results();
    updates.procedureCalls
      .filter((call) => call.method.startsWith('*.') || call.method.startsWith('renderer.'))
      .forEach((call) => {
        const func = call.method.split('.')[1];
        if (!(func in this)) {
          console.warn(`No function called ${call.method} in renderer`);
          return;
        }
        this[func](call.params, results);
      });

    this.translator.applyJsonPatch(updates.projectData);

    this.resize(this.context.projectSession.viewports[0]);
    const selectedNodes = this.context.projectSession.selections
      .filter((s) => s.kind === 'nodes' && s.id !== null)
      .map((s) => s.id);

    const sceneId = this.translator.gltf.scene;
    const scene = this.translator.collections['/scenes'].get(sceneId);
    if (isDefined(sceneId) && !isDefined(scene)) {
      console.warn('Unable to find scene:', sceneId);
    }
    if (this.renderer && scene) {
      const nodeList = this.translator.collections['/nodes'];
      const selectedMeshes = selectedNodes
        .map((id) => nodeList.get(id).children)
        .flat();
      this.outlinePass.selectedObjects = selectedMeshes;
      this.renderer.toneMappingExposure = 12.5 / (2 ** scene.userData.exposure);

      this.copyDepthPass.background = this.loadThemeColor('base00');

      this.outlinePass.renderScene = scene;

      const renderPass = this.composer.passes[0];
      renderPass.scene = scene;
      renderPass.camera = this.camera;
      this.composer.render();
    }

    return results;
  }

  pickSelection(params, results) {
    const viewportPos = { x: params.x, y: params.y };
    const normalizedPosition = {
      x: viewportPos.x * 2 - 1,
      y: viewportPos.y * -2 + 1,
    };
    const camera = this.camera;
    if (!camera) {
      console.warn('No camera found for picking');
      return;
    }
    const sceneId = this.translator.gltf.scene;
    const scene = this.translator.collections['/scenes'].get(sceneId);
    if (!scene) {
      console.warn('No scene found for picking');
      return;
    }
    this.raycaster.setFromCamera(normalizedPosition, camera);
    const castResults = this.raycaster.intersectObjects(scene.children);
    if (castResults.length === 0) {
      return;
    }
    const mesh = castResults[0].object;
    const node = mesh.parent.parent;
    const { id } = node.userData;

    if (id) {
      results.addProjectSessionUpdate({
        op: 'replace',
        path: '/selections',
        value: [{
          kind: 'nodes',
          key: '/nodes',
          id,
        }],
      });
    }
  }

  debug() {
    console.log('==Renderer==');
    const data = {};
    Object.entries(this.translator.collections).forEach(([key, collection]) => {
      data[key] = collection.resources;
    });
    console.dir(data);
  }
}

export default Renderer;
