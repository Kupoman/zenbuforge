import * as ImGui from './extern/imgui.mjs';

function Viewport(model, windowPos, windowSize, results) {
  ImGui.SetNextWindowPos(windowPos);
  ImGui.SetNextWindowSize(windowSize);
  const windowFlags = (
    ImGui.WindowFlags.None
    | ImGui.WindowFlags.AlwaysAutoResize
    | ImGui.WindowFlags.NoCollapse
  );

  ImGui.PushStyleVar(ImGui.StyleVar.WindowPadding, new ImGui.Vec2(0, 0));
  ImGui.PushStyleVar(ImGui.StyleVar.FramePadding, new ImGui.Vec2(0, 0));
  ImGui.Begin('Viewport', null, windowFlags);

  ImGui.BeginChild('render');

  results.setViewport(
    ImGui.GetItemRectMin().x,
    ImGui.GetItemRectMin().y,
    ImGui.GetContentRegionAvail().x,
    ImGui.GetContentRegionAvail().y,
  );

  ImGui.Image(
    model.renderResult,
    ImGui.GetContentRegionAvail(),
    new ImGui.ImVec2(0, 1),
    new ImGui.ImVec2(1, 0),
  );
  const active = ImGui.IsItemHovered();

  ImGui.EndChild();

  ImGui.End();
  ImGui.PopStyleVar(2);

  return active;
}

export default Viewport;
