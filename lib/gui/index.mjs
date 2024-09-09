import * as ImGui from './extern/imgui.mjs';
import * as ImGuiCanvas from './extern/imgui_impl.mjs';

import Results from './Results.mjs';
import ObjectView from './ObjectView.mjs';
import CollectionView from './CollectionView.mjs';
import AssetBrowserView from './AssetBrowserView.mjs';

const COLLECTION_EDITOR_CONFIGS = {
  blank: new CollectionView({
    name: '',
  }),
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
          {
            label: 'Server',
            key: 'server',
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
  textures: new CollectionView({
    name: 'Textures',
    actions: [
      {
        name: 'New',
        method: 'addResource',
        params: {
          kind: 'textures',
          key: '/project/textures',
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
      {
        label: 'Server',
        type: 'text',
        default: '',
        key: 'server',
      },
    ],
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'projects',
          key: '/projectList/projects',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
      },
      {
        name: 'Load',
        method: 'loadProject',
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
      },
      {
        name: 'Import',
        method: 'import',
        condition: (model, obj) => obj.id === model.session.projectId,
      },
      {
        name: 'Export Project',
        method: 'export',
        condition: (model, obj) => obj.id === model.session.projectId,
      },
      {
        name: 'Export glTF',
        method: 'exportGltf',
        condition: (model, obj) => obj.id === model.session.projectId,
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
      {
        label: 'Nodes',
        key: 'nodes',
        type: 'listRef',
        args: {
          key: '/nodes',
        },
      },
    ],
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'scenes',
          key: '/project/scenes',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
          display: '%.2fm',
        },
      },
      {
        label: 'Rotation',
        type: 'float3',
        default: [0.0, 0.0, 0.0],
        key: 'extras/rotationEuler',
        args: {
          step: 1,
          display: '%.2f°',
        },
      },
      {
        label: 'Scale',
        type: 'float3',
        default: [1.0, 1.0, 1.0],
        key: 'scale',
        args: {
          display: '%.2fx',
        },
      },
      {
        label: 'Children',
        key: 'children',
        type: 'listRef',
        args: {
          key: '/nodes',
        },
      },
      {
        label: 'Mesh',
        key: 'mesh',
        optional: true,
        type: 'ref',
        args: {
          key: '/meshes',
        },
      },
      {
        label: 'Light',
        key: 'extensions/KHR_lights_punctual/light',
        optional: true,
        type: 'ref',
        args: {
          key: '/extensions/KHR_lights_punctual/lights',
        },
      },
      {
        label: 'Camera',
        key: 'camera',
        optional: true,
        type: 'ref',
        args: {
          key: '/cameras',
        },
      },
    ],
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'nodes',
          key: '/project/nodes',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
      {
        label: 'Primitives',
        type: 'beginTabs',
        key: 'primitives',
      },
      {
        label: 'Material',
        key: 'material',
        optional: true,
        type: 'ref',
        args: {
          key: '/materials',
        },
      },
      {
        label: 'Draw Mode',
        type: 'combo',
        default: 4,
        key: 'mode',
        args: {
          options: [
            'points',
            'lines',
            'line loop',
            'line strip',
            'triangles',
            'triangle strip',
            'triangle fan',
          ],
          mapValues: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
          ],
        },
      },
      {
        label: 'Positions',
        key: 'attributes/POSITION',
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Normals',
        key: 'attributes/NORMAL',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Tangents',
        key: 'attributes/TANGENT',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Positions',
        key: 'attributes/POSITION',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Texcoords (0)',
        key: 'attributes/TEXCOORD_0',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Texcoords (1)',
        key: 'attributes/TEXCOORD_1',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Colors',
        key: 'attributes/COLOR_0',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Indices',
        key: 'indices',
        optional: true,
        type: 'ref',
        args: {
          key: '/accessors',
        },
      },
      {
        label: 'Primitives',
        type: 'endTabs',
        key: 'primitives',
      },
    ],
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'meshes',
          key: '/project/meshes',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
        label: 'Base Color Texture',
        key: 'pbrMetallicRoughness/baseColorTexture',
        optional: true,
        type: 'textureRef',
        args: {
          key: '/textures',
        },
      },
      {
        label: 'Roughness Factor',
        type: 'float',
        default: 0,
        key: 'pbrMetallicRoughness/roughnessFactor',
        args: {
          step: 0.01,
          min: 0.0,
          max: 1.0,
        },
      },
      {
        label: 'Metallic Factor',
        type: 'float',
        default: 0,
        key: 'pbrMetallicRoughness/metallicFactor',
        args: {
          step: 0.01,
          min: 0.0,
          max: 1.0,
        },
      },
      {
        label: 'Metallic/Roughness Texture',
        key: 'pbrMetallicRoughness/metallicRoughnessTexture',
        optional: true,
        type: 'textureRef',
        args: {
          key: '/textures',
        },
      },
      {
        label: 'Emissive Factor',
        type: 'color3',
        default: [0.0, 0.0, 0.0],
        key: 'emissiveFactor',
      },
      {
        label: 'Emissive Texture',
        key: 'emissiveTexture',
        optional: true,
        type: 'textureRef',
        args: {
          key: '/textures',
        },
      },
      {
        label: 'Normal Texture',
        key: 'normalTexture',
        optional: true,
        type: 'textureRef',
        args: {
          key: '/textures',
        },
      },
      {
        label: 'Occlusion Texture',
        key: 'occlusionTexture',
        optional: true,
        type: 'textureRef',
        args: {
          key: '/textures',
        },
      },
      {
        label: 'Alpha Mode',
        type: 'combo',
        default: 'OPAQUE',
        key: 'alphaMode',
        args: {
          options: [
            'opaque',
            'mask',
            'blend',
          ],
          mapValues: [
            'OPAQUE',
            'MASK',
            'BLEND',
          ],
        },
      },
      {
        label: 'Alpha Cutoff',
        type: 'float',
        default: 0.5,
        key: 'alphaCutoff',
        args: {
          step: 0.01,
          min: 0.0,
          max: 1.0,
        },
      },
      {
        label: 'Double Sided',
        type: 'boolean',
        default: false,
        key: 'doubleSided',
      },
    ],
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'materials',
          key: '/project/materials',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
        label: 'Type',
        type: 'combo',
        key: 'type',
        args: {
          options: [
            'point',
            'spot',
            'directional',
          ],
        },
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
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'lights',
          key: '/project/extensions/KHR_lights_punctual/lights',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'textures',
          key: '/project/textures',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'samplers',
          key: '/project/samplers',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
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
    actions: [
      {
        name: 'Delete',
        method: 'deleteResource',
        params: {
          kind: 'cameras',
          key: '/project/cameras',
        },
        objectParams: [
          {
            key: 'id',
            pointer: '/id',
          },
        ],
      },
    ],
  }),
};

class Gui {
  constructor(canvas) {
    this.canvas = canvas;
    this._isViewportActive = false;

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
    return !this._isViewportActive;
  }

  async init() {
    await ImGui.default();
    ImGui.CreateContext();
    ImGui.StyleColorsDark();
    ImGuiCanvas.Init(this.canvas);

    const io = ImGui.GetIO();
    io.ConfigDragClickToInputText = true;
  }

  update(dt, model, width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    let results = new Results();
    results = results.mergeResults(AssetBrowserView.draw(
      model,
      new ImGui.ImVec2(0, 0),
      new ImGui.ImVec2(width * 0.17, height),
    ));

    const selection = model.session.selections[0];
    const kind = selection?.kind;
    let config = (selection?.id) ? EDITOR_CONFIGS[kind] : COLLECTION_EDITOR_CONFIGS[kind];
    if (!config) {
      config = COLLECTION_EDITOR_CONFIGS.blank;
    }
    results = results.mergeResults(config.update(
      model,
      new ImGui.ImVec2(width * 0.17, 0),
      new ImGui.ImVec2(width * 0.17, height),
    ));

    results.viewport = {
      x: width * 0.34,
      y: 0,
      width: width * 0.66,
      height,
    };
    ImGui.SetNextWindowPos(new ImGui.ImVec2(results.viewport.x, results.viewport.y));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(results.viewport.width, results.viewport.height));
    const windowFlags = (
      ImGui.WindowFlags.None
      | ImGui.WindowFlags.AlwaysAutoResize
      | ImGui.WindowFlags.NoCollapse
    );
    ImGui.Begin('Viewport', null, windowFlags);
    ImGui.BeginChild('render');
    ImGui.PushStyleVar(ImGui.StyleVar.WindowPadding, new ImGui.Vec2(0, 0));
    ImGui.PushStyleVar(ImGui.StyleVar.FramePadding, new ImGui.Vec2(0, 0));
    results.viewport.width = ImGui.GetContentRegionAvail().x;
    results.viewport.height = ImGui.GetContentRegionAvail().y;
    ImGui.Image(
      model.renderResult,
      ImGui.GetContentRegionAvail(),
      new ImGui.ImVec2(0, 1),
      new ImGui.ImVec2(1, 0),
    );
    this._isViewportActive = ImGui.IsItemHovered();
    ImGui.PopStyleVar();
    ImGui.EndChild();
    ImGui.End();

    ImGui.EndFrame();
    ImGui.Render();

    return results;
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }
}

export default Gui;
