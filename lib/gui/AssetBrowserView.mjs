import * as ImGui from './extern/imgui.mjs';
import Results from './Results.mjs';

function getId(obj) {
  return obj?.extensions?.ZF_id?.id;
}

function drawNode(model, node, kind) {
  const results = new Results();
  const id = getId(node);

  let nodeFlags = (
    ImGui.ImGuiTreeNodeFlags.OpenOnArrow
    | ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick
    | ImGui.ImGuiTreeNodeFlags.SpanAvailWidth
    | ImGui.ImGuiTreeNodeFlags.Leaf
  );

  const selection = model.session.selections[0];
  if (selection && id === selection.id) {
    nodeFlags |= ImGui.ImGuiTreeNodeFlags.Selected;
  }

  //if (!node.children || node.children.length === 0) {
  //  nodeFlags |= ImGui.ImGuiTreeNodeFlags.Leaf;
  //}

  const nodeOpen = ImGui.TreeNodeEx(id, nodeFlags, node.name ?? '---');
  if (ImGui.IsItemClicked()) {
    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind,
        id,
      }],
    });
  }
  if (nodeOpen) {
    ImGui.TreePop();
  }

  return results;
}

function drawTree(model, key, header) {
  let results = new Results();
  const headerNodeFlags = (
    ImGui.ImGuiTreeNodeFlags.OpenOnArrow
    | ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick
    | ImGui.ImGuiTreeNodeFlags.SpanAvailWidth
  );
  if (ImGui.TreeNodeEx(key, headerNodeFlags, header)) {
    Object.values(model.project[key]).forEach((value) => {
      results = results.mergeResults(drawNode(model, value, key));
    });
    ImGui.TreePop();
  }
  return results;
}

class AssetBrowserView {
  constructor(options) {
    const _options = options ?? {};
    this.size = _options.size ?? 1;
    this.name = 'Asset Browser';
  }

  update(model, windowPos, windowSize) {
    let results = new Results();
    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    results = results.mergeResults(drawTree(model, 'scenes', 'Scenes'));
    results = results.mergeResults(drawTree(model, 'nodes', 'Nodes'));
    results = results.mergeResults(drawTree(model, 'meshes', 'Meshes'));
    results = results.mergeResults(drawTree(model, 'materials', 'Materials'));
    results = results.mergeResults(drawTree(model, 'cameras', 'Cameras'));

    ImGui.End();

    return results;
  }
}

export default AssetBrowserView;
