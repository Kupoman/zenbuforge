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
  ImGui.Begin('Viewport', null, windowFlags);

  ImGui.BeginChild('render');

  const contentMin = ImGui.GetWindowContentRegionMin();
  const contentMax = ImGui.GetWindowContentRegionMax();
  const winPos = ImGui.GetCursorScreenPos();

  results.setViewport(
    contentMin.x + winPos.x,
    ImGui.GetIO().DisplaySize.y - (contentMin.y + winPos.y + contentMax.y),
    contentMax.x,
    contentMax.y,
  );

  ImGui.InvisibleButton(
    'canvas',
    ImGui.GetContentRegionAvail(),
  );
  const active = ImGui.IsItemHovered();

  ImGui.EndChild();

  ImGui.End();
  ImGui.PopStyleVar(1);

  return active;
}

export default Viewport;
