import * as ImGui from '../extern/imgui.mjs';
import * as ImGuiCanvas from '../extern/imgui_impl.mjs';

import MaterialView from './MaterialView.mjs';
import NodeView from './NodeView.mjs';
import ProjectListView from './ProjectListView.mjs';

class Gui {
  constructor(canvas) {
    this.canvas = canvas;
    this.isActive = false;

    this.views = {
      projectList: new ProjectListView(),
      node: new NodeView(),
      material: new MaterialView(),
    };
  }

  async init() {
    await ImGui.default();
    ImGui.CreateContext();
    ImGui.StyleColorsDark();
    ImGuiCanvas.Init(this.canvas);
  }

  update(dt, models, width, height) {
    this.isActive = false;

    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    const updates = {};
    const viewHeight = height / Object.keys(this.views).length;
    Object.entries(models ?? {}).forEach(([key, model], i) => {
      const view = this.views[key];
      if (!view) {
        return;
      }
      const pos = new ImGui.ImVec2(0, i * viewHeight);
      const size = new ImGui.ImVec2(width * 0.17, viewHeight);
      updates[key] = view.update(model, pos, size);
      this.isActive = this.isActive || view.isActive;
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
