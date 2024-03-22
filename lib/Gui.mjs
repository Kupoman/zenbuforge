import * as ImGui from '../extern/imgui.mjs';
import * as ImGuiCanvas from '../extern/imgui_impl.mjs';

import ObjectView from './ObjectView.mjs';
import ProjectListView from './ProjectListView.mjs';
import SceneGraphView from './SceneGraphView.mjs';
import TreeView from './TreeView.mjs';

class Gui {
  constructor(canvas) {
    this.canvas = canvas;

    this.containers = [
      {
        getSize: (width, height) => [width * 0.17, height],
        getPos: (width, height) => [0, 0],
        views: {
          scenes: new TreeView('Scenes', 'scenes', { size: 1 }),
          sceneGraph: new SceneGraphView({ size: 4 }),
          projectList: new ProjectListView({ size: 1 }),
        },
      },
      {
        getSize: (width, height) => [width * 0.17, height],
        getPos: (width, height) => [width - width * 0.17, 0],
        views: {
          node: new ObjectView({
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
                default: [0.0, 0.0, 0.0],
                key: 'scale',
              },
            ],
          }),
          mesh: new ObjectView({
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
          material: new ObjectView({
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
                key: 'pbrMetallicRoughness.baseColorFactor',
              },
              {
                label: 'Roughness Factor',
                type: 'float',
                default: 0,
                key: 'pbrMetallicRoughness.roughnessFactor',
              },
              {
                label: 'Metallic Factor',
                type: 'float',
                default: 0,
                key: 'pbrMetallicRoughness.metallicFactor',
              },
            ],
          }),
          texture: new ObjectView({
            name: 'Texture',
            key: 'textures',
            properties: [
              {
              },
            ],
          }),
          sampler: new ObjectView({
            name: 'Sampler',
            key: 'samplers',
            properties: [
              {
              },
            ],
          }),
        },
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

  update(dt, models, width, height) {
    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    const updates = {};
    this.containers.forEach((container) => {
      const containerSize = container.getSize(width, height);
      const containerPos = container.getPos(width, height);
      const containerHeight = Object.values(container.views).reduce(
        (total, view) => total + view.size,
        0,
      );
      const baseViewHeight = containerSize[1] / containerHeight;

      let offset = 0;
      Object.entries(container.views).forEach(([key, view]) => {
        const model = models[key] ?? null;
        const viewHeight = baseViewHeight * view.size;
        const pos = new ImGui.ImVec2(containerPos[0], offset);
        const size = new ImGui.ImVec2(containerSize[0], viewHeight);
        updates[key] = view.update(model, pos, size);

        offset += viewHeight;
      });
    });

    ImGui.EndFrame();
    ImGui.Render();

    return updates;
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }
}

export default Gui;
