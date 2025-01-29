import * as jsonpatch from 'fast-json-patch';
import { Results } from 'zf-data';

import * as ImGui from './extern/imgui.mjs';
import * as ImGuiCanvas from './extern/imgui_impl.mjs';

import ObjectView from './ObjectView.mjs';
import CollectionView from './CollectionView.mjs';
import AssetBrowserView from './AssetBrowserView.mjs';
import Viewport from './Viewport.mjs';

import COLLECTION_EDITOR_CONFIGS from './CollectionEditors.config.json';
import EDITOR_CONFIGS from './ResourceEditors.config.json';

const BLANK_EDITOR = new CollectionView({
  name: '',
});

function hexToColor(hex) {
  const dec = hex.match(/.{2}/g).map((s) => parseInt(s, 16) / 255);
  return new ImGui.Vec4(dec[0], dec[1], dec[2], 1.0);
}

class Gui {
  constructor(canvas, settings) {
    this.canvas = canvas;
    this.time = 0;
    this.settings = settings;
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

    this.projectSession = {
      selections: [],
      viewports: [{
        x: 0,
        y: 0,
        width: 1,
        height: 1,
      }],
    };
    this.scratchSession = {
      width: 1,
      height: 1,
    };
    this.clientSession = {};
    this.userSession = {};
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

    /* eslint-disable no-unused-vars */

    const base00 = hexToColor(this.settings.colors.base00);
    const base01 = hexToColor(this.settings.colors.base01);
    const base02 = hexToColor(this.settings.colors.base02);
    const base03 = hexToColor(this.settings.colors.base03);
    const base04 = hexToColor(this.settings.colors.base04);
    const base05 = hexToColor(this.settings.colors.base05);
    const base06 = hexToColor(this.settings.colors.base06);
    const base07 = hexToColor(this.settings.colors.base07);
    const base08 = hexToColor(this.settings.colors.base08);
    const base09 = hexToColor(this.settings.colors.base09);
    const base0A = hexToColor(this.settings.colors.base0A);
    const base0B = hexToColor(this.settings.colors.base0B);
    const base0C = hexToColor(this.settings.colors.base0C);
    const base0D = hexToColor(this.settings.colors.base0D);
    const base0E = hexToColor(this.settings.colors.base0E);
    const base0F = hexToColor(this.settings.colors.base0F);
    /* eslint-enable no-unused-vars */

    const style = ImGui.GetStyle();
    style.FrameRounding = 4.0;
    /* eslint-disable no-multi-spaces */
    /* eslint-disable spaced-comment */
    style.Colors[ImGui.Col.Text]                  = base05;
    style.Colors[ImGui.Col.TextDisabled]          = base03;
    style.Colors[ImGui.Col.WindowBg]              = base00;
    //style.Colors[ImGui.Col.ChildWindowBg]         = base00;
    //style.Colors[ImGui.Col.PopupBg]               = base00;
    style.Colors[ImGui.Col.Border]                = base01;
    style.Colors[ImGui.Col.BorderShadow]          = base00;
    style.Colors[ImGui.Col.FrameBg]               = base0E;
    style.Colors[ImGui.Col.FrameBgHovered]        = base02;
    style.Colors[ImGui.Col.FrameBgActive]         = base0A;
    style.Colors[ImGui.Col.TitleBg]               = base01;
    style.Colors[ImGui.Col.TitleBgCollapsed]      = base01;
    style.Colors[ImGui.Col.TitleBgActive]         = base0A;
    style.Colors[ImGui.Col.MenuBarBg]             = base01;
    style.Colors[ImGui.Col.ScrollbarBg]           = base00;
    style.Colors[ImGui.Col.ScrollbarGrab]         = base0E;
    style.Colors[ImGui.Col.ScrollbarGrabHovered]  = base02;
    style.Colors[ImGui.Col.ScrollbarGrabActive]   = base0A;
    //style.Colors[ImGui.Col.ComboBg]               = base00;
    style.Colors[ImGui.Col.CheckMark]             = base0A;
    style.Colors[ImGui.Col.SliderGrab]            = base0E;
    style.Colors[ImGui.Col.SliderGrabActive]      = base0A;
    style.Colors[ImGui.Col.Button]                = base0E;
    style.Colors[ImGui.Col.ButtonHovered]         = base02;
    style.Colors[ImGui.Col.ButtonActive]          = base0A;
    style.Colors[ImGui.Col.Header]                = base01;
    style.Colors[ImGui.Col.HeaderHovered]         = base02;
    style.Colors[ImGui.Col.HeaderActive]          = base0A;
    //style.Colors[ImGui.Col.Column]                = base00;
    //style.Colors[ImGui.Col.ColumnHovered]         = base00;
    //style.Colors[ImGui.Col.ColumnActive]          = base00;
    //style.Colors[ImGui.Col.ResizeGrip]            = base00;
    //style.Colors[ImGui.Col.ResizeGripHovered]     = base00;
    //style.Colors[ImGui.Col.ResizeGripActive]      = base00;
    //style.Colors[ImGui.Col.CloseButton]           = base00;
    //style.Colors[ImGui.Col.CloseButtonHovered]    = base00;
    //style.Colors[ImGui.Col.CloseButtonActive]     = base00;
    //style.Colors[ImGui.Col.PlotLines]             = base00;
    //style.Colors[ImGui.Col.PlotLinesHovered]      = base00;
    //style.Colors[ImGui.Col.PlotHistogram]         = base00;
    //style.Colors[ImGui.Col.PlotHistogramHovered]  = base00;
    style.Colors[ImGui.Col.TextSelectedBg]        = base01;
    //style.Colors[ImGui.Col.ModalWindowDarkening]  = base00;
    /* eslint-enable no-multi-spaces */
    /* eslint-enable spaced-comment */
  }

  _getCurrentEditor(model) {
    const selection = model.session.selections[0];
    const kind = selection?.kind;
    const config = (selection?.id) ? this.resource_editors[kind] : this.collection_editors[kind];
    return config ?? BLANK_EDITOR;
  }

  updateState(key, updates) {
    this[key] = jsonpatch.applyPatch(this[key], updates[key], true, true, true).newDocument;
  }

  update(updates, projectData) {
    const results = new Results();

    this.updateState('projectSession', updates);
    this.updateState('clientSession', updates);
    this.updateState('userSession', updates);
    this.updateState('scratchSession', updates);

    this.time += this.scratchSession.dt;

    ImGuiCanvas.NewFrame(this.time);
    ImGui.NewFrame();

    const model = {
      project: projectData,
      session: this.projectSession,
      clientSession: this.clientSession,
      projects: this.userSession.projects,
    };
    const { width, height } = this.scratchSession;

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

    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());

    return results;
  }
}

export default Gui;
