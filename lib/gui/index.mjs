import * as ImGui from './extern/imgui.mjs';
import * as ImGuiCanvas from './extern/imgui_impl.mjs';

import Results from './Results.mjs';
import ObjectView from './ObjectView.mjs';
import CollectionView from './CollectionView.mjs';
import AssetBrowserView from './AssetBrowserView.mjs';

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

  update(dt, model, width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    ImGuiCanvas.NewFrame(dt);
    ImGui.NewFrame();

    let results = new Results();
    AssetBrowserView(
      model,
      this.assetBrowserTrees,
      new ImGui.ImVec2(0, 0),
      new ImGui.ImVec2(width * 0.17, height),
      results,
    );

    const selection = model.session.selections[0];
    const kind = selection?.kind;
    let config = (selection?.id) ? this.resource_editors[kind] : this.collection_editors[kind];
    if (!config) {
      config = BLANK_EDITOR;
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
