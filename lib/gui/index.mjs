import * as ImGui from './extern/imgui.mjs';
import * as ImGuiCanvas from './extern/imgui_impl.mjs';

import Results from './Results.mjs';
import ObjectView from './ObjectView.mjs';
import CollectionView from './CollectionView.mjs';
import AssetBrowserView from './AssetBrowserView.mjs';
import Viewport from './Viewport.mjs';

import COLLECTION_EDITOR_CONFIGS from './CollectionEditors.config.json';
import EDITOR_CONFIGS from './ResourceEditors.config.json';

const BLANK_EDITOR = new CollectionView({
  name: '',
});

class Gui {
  constructor(canvas) {
    this.canvas = canvas;
    this._isViewportActive = false;

    this.resource_editors = Object.fromEntries(Object.entries(EDITOR_CONFIGS).map(
      ([key, value]) => [key, new ObjectView(value)],
    ));

    this.collection_editors = Object.fromEntries(Object.entries(COLLECTION_EDITOR_CONFIGS).map(
      ([key, value]) => [key, new CollectionView(value)],
    ));

    this.assetBrowserTrees = Object.values(COLLECTION_EDITOR_CONFIGS).map((value) => ({
      label: value.name,
      key: value.key,
    }));
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

  _getCurrentEditor(model) {
    const selection = model.session.selections[0];
    const kind = selection?.kind;
    const config = (selection?.id) ? this.resource_editors[kind] : this.collection_editors[kind];
    return config ?? BLANK_EDITOR;
  }

  update(dt, model, width, height) {
    const results = new Results();
    this.canvas.width = width;
    this.canvas.height = height;

    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    AssetBrowserView(
      model,
      this.assetBrowserTrees,
      new ImGui.ImVec2(0, 0),
      new ImGui.ImVec2(width * 0.17, height),
      results,
    );

    const config = this._getCurrentEditor(model);
    config.update(
      model,
      new ImGui.ImVec2(width * 0.17, 0),
      new ImGui.ImVec2(width * 0.17, height),
      results,
    );

    this._isViewportActive = Viewport(
      model,
      new ImGui.ImVec2(width * 0.34, 0),
      new ImGui.ImVec2(width * 0.66, height),
      results,
    );

    ImGui.EndFrame();
    ImGui.Render();

    return results;
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }
}

export default Gui;
