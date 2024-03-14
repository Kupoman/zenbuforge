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
    Object.entries(models ?? {}).forEach(([key, model]) => {
      const view = this.views[key];
      updates[key] = view.update(model, width, height);
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
