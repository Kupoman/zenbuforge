import * as ImGui from './extern/imgui.mjs';
import * as ImGuiCanvas from './extern/imgui_impl.mjs';

import Results from './Results.mjs';
import ObjectView from './ObjectView.mjs';
import CollectionView from './CollectionView.mjs';
import AssetBrowserView from './AssetBrowserView.mjs';

const COLLECTION_EDITOR_CONFIGS = {
  projects: new CollectionView({
    name: 'Projects',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'projects',
          key: '/projectList/projects',
        },
      },
      {
        name: 'Add Remote',
        method: 'loadRemoteProject',
        userParams: [
          {
            label: 'ID',
            key: 'id',
            type: 'text',
            default: '',
          },
        ],
      },
    ],
  }),
  scenes: new CollectionView({
    name: 'Scenes',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'scenes',
          key: '/project/scenes',
        },
      },
    ],
  }),
  nodes: new CollectionView({
    name: 'Nodes',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'nodes',
          key: '/project/nodes',
        },
      },
    ],
  }),
  meshes: new CollectionView({
    name: 'Meshes',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'meshes',
          key: '/project/meshes',
        },
      },
    ],
  }),
  materials: new CollectionView({
    name: 'Materials',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'materials',
          key: '/project/materials',
        },
      },
    ],
  }),
  lights: new CollectionView({
    name: 'Lights',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'lights',
          key: '/project/extensions/KHR_lights_punctual/lights',
        },
      },
    ],
  }),
  cameras: new CollectionView({
    name: 'Cameras',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'cameras',
          key: '/project/cameras',
        },
      },
    ],
  }),
};

const EDITOR_CONFIGS = {
  projects: new ObjectView({
    name: 'Project',
    key: 'projects',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
    ],
    actions: [
      {
        name: 'Load',
        function: (obj, results) => {
          results.addCall({
            method: 'loadProject',
            params: { id: obj.id },
          });
        },
      },
      {
        name: 'Import',
        function: (obj, results) => {
          results.addCall({
            method: 'loadFile',
          });
        },
        condition: (obj, model) => obj.id === model.session.projectId,
      },
    ],
  }),
  scenes: new ObjectView({
    name: 'Scene',
    key: 'scenes',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
    ],
  }),
  nodes: new ObjectView({
    name: 'Node',
    key: 'nodes',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
      {
        label: 'Position',
        key: 'translation',
        default: [0.0, 0.0, 0.0],
        type: 'float3',
        args: {
          step: 0.1,
          min: null,
          max: null,
        },
      },
      {
        label: 'Rotation',
        type: 'float4',
        default: [0.0, 0.0, 0.0],
        key: 'rotation',
      },
      {
        label: 'Scale',
        type: 'float3',
        default: [1.0, 1.0, 1.0],
        key: 'scale',
      },
      {
        label: 'Mesh',
        key: 'extensions/ZF_id/mesh',
        type: 'ref',
        args: {
          kind: 'meshes',
        },
      },
    ],
  }),
  meshes: new ObjectView({
    name: 'Mesh',
    key: 'meshes',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
    ],
  }),
  materials: new ObjectView({
    name: 'Material',
    key: 'materials',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
      {
        label: 'Base Color Factor',
        type: 'color4',
        default: [0.0, 0.0, 0.0, 1.0],
        key: 'pbrMetallicRoughness/baseColorFactor',
      },
      {
        label: 'Roughness Factor',
        type: 'float',
        default: 0,
        key: 'pbrMetallicRoughness/roughnessFactor',
      },
      {
        label: 'Metallic Factor',
        type: 'float',
        default: 0,
        key: 'pbrMetallicRoughness/metallicFactor',
      },
    ],
  }),
  lights: new ObjectView({
    name: 'Light',
    key: 'extensions/KHR_lights_punctual/lights',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
      {
        label: 'Color',
        type: 'color3',
        default: [1.0, 1.0, 1.0],
        key: 'color',
      },
      {
        label: 'Intensity',
        type: 'float',
        default: 1.0,
        key: 'intensity',
      },
    ],
  }),
  textures: new ObjectView({
    name: 'Texture',
    key: 'textures',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
    ],
  }),
  samplers: new ObjectView({
    name: 'Sampler',
    key: 'samplers',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
      {
        label: 'Min Filter',
        type: 'float',
        default: 0,
        key: 'minFilter',
      },
      {
        label: 'Mag Filter',
        type: 'float',
        default: 0,
        key: 'magFilter',
      },
      {
        label: 'S Wrapping',
        type: 'float',
        default: 0,
        key: 'wrapS',
      },
      {
        label: 'T Wrapping',
        type: 'float',
        default: 0,
        key: 'wrapT',
      },
    ],
  }),
  cameras: new ObjectView({
    name: 'Camera',
    key: 'cameras',
    properties: [
      {
        label: 'Name',
        type: 'text',
        default: '',
        key: 'name',
      },
    ],
  }),
};

class Gui {
  constructor(canvas) {
    this.canvas = canvas;

    this.containers = [
      {
        getSize: (width, height) => [width * 0.17, height],
        getPos: () => [0, 0],
        views: [
          new AssetBrowserView({ size: 1 }),
        ],
      },
      {
        getSize: (width, height) => [width * 0.17, height],
        getPos: (width) => [width * 0.17, 0],
        views: [],
      },
    ];
  }

  isActive() {
    return ImGui.IsAnyItemActive();
  }

  async init() {
    await ImGui.default();
    ImGui.CreateContext();
    ImGui.StyleColorsDark();
    ImGuiCanvas.Init(this.canvas);
  }

  update(dt, model, width, height) {
    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    const selection = model.session.selections[0];
    this.containers[1].views = [];
    if (selection) {
      const { kind } = selection;
      const config = (selection.id) ? EDITOR_CONFIGS[kind] : COLLECTION_EDITOR_CONFIGS[kind];
      if (config) {
        this.containers[1].views.push(config);
      } else {
        console.warn(`Unable to find an editor config for selection kind ${selection.kind}`);
      }
    }

    let results = new Results();
    this.containers.forEach((container) => {
      const containerSize = container.getSize(width, height);
      const containerPos = container.getPos(width, height);
      const containerHeight = Object.values(container.views).reduce(
        (total, view) => total + view.size,
        0,
      );
      const baseViewHeight = containerSize[1] / containerHeight;

      let offset = 0;
      container.views.forEach((view) => {
        const viewHeight = baseViewHeight * view.size;
        const pos = new ImGui.ImVec2(containerPos[0], offset);
        const size = new ImGui.ImVec2(containerSize[0], viewHeight);
        results = results.mergeResults(view.update(model, pos, size));

        offset += viewHeight;
      });
    });

    ImGui.EndFrame();
    ImGui.Render();

    return results;
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }
}

export default Gui;
