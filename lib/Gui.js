import * as ImGui from './imgui';
import * as ImGuiCanvas from './imgui_impl';

class Gui {
  constructor(canvas, dataState) {
    this.canvas = canvas;
    this.dataState = dataState;
    this.selection = null;

    this.width = 100;
    this.height = 100;

    this._isActive = false;
  }

  async init() {
    await ImGui.default();
    ImGui.CreateContext();
    ImGui.StyleColorsDark();
    ImGuiCanvas.Init(this.canvas);
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  drawAssetPanel() {
    const sections = [
      'scenes',
      'nodes',
      'meshes',
      'materials',
      'textures',
      'cameras',
    ];

    ImGui.SetNextWindowPos(new ImGui.ImVec2(0, 0));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(200, this.height));
    ImGui.Begin('Assets', null, ImGui.WindowFlags.AlwaysAutoResize);

    if (ImGui.IsWindowFocused()) {
      this._isActive = true;
    }

    if (this.dataState.isInitialized()) {
      sections.forEach((sectionId) => {
        if (ImGui.TreeNode(sectionId.toUpperCase())) {
          (this.dataState[sectionId] || []).forEach((item, i) => {
            const name = item.name || i.toString();
            if (ImGui.Selectable(name)) {
              this.selection = item;
            }
          });
          ImGui.TreePop();
        }
      });
    } else {
      ImGui.Text('Loading File');
    }

    ImGui.End();
  }

  drawDetailPanel() {
    ImGui.SetNextWindowPos(new ImGui.ImVec2(this.width - 300, 0));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(300, this.height));
    ImGui.Begin('Details');

    if (ImGui.IsWindowFocused()) {
      this._isActive = true;
    }

    if (this.selection) {
      this.selection.drawEditor();
    }

    ImGui.End();
  }

  update(elapsedTime) {
    this._isActive = false;
    if (this.dataState.isInitialized() && !this.selection) {
      this.selection = this.dataState.asset;
    }
    ImGuiCanvas.NewFrame(elapsedTime);
    ImGui.NewFrame();

    this.drawAssetPanel();
    this.drawDetailPanel();

    ImGui.EndFrame();
    ImGui.Render();
  }

  isActive() {
    return this._isActive;
  }
}

export default Gui;
