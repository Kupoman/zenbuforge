import * as ImGui from './extern/imgui.mjs';

function Viewport(model, windowPos, windowSize, results) {
  ImGui.SetNextWindowPos(windowPos);
  ImGui.SetNextWindowSize(windowSize);
  const windowFlags = (
    ImGui.WindowFlags.None
    | ImGui.WindowFlags.AlwaysAutoResize
    | ImGui.WindowFlags.NoCollapse
    | ImGui.WindowFlags.NoBackground
  );

  ImGui.PushStyleVar(ImGui.StyleVar.WindowPadding, new ImGui.Vec2(0, 0));
  ImGui.Begin('Viewport', null, windowFlags);

  ImGui.BeginChild('render');

  const contentMin = ImGui.GetWindowContentRegionMin();
  const contentMax = ImGui.GetWindowContentRegionMax();
  const winPos = ImGui.GetCursorScreenPos();

  results.addProjectSessionUpdate({
    op: 'replace',
    path: '/viewports/0',
    value: {
      x: contentMin.x + winPos.x,
      y: ImGui.GetIO().DisplaySize.y - (contentMin.y + winPos.y + contentMax.y),
      width: contentMax.x,
      height: contentMax.y,
    },
  });

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
