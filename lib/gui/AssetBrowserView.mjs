import * as jsonpatch from 'fast-json-patch';

import * as ImGui from './extern/imgui.mjs';

function getId(obj) {
  return obj?.extras?.id;
}

function getChildren(model, node, kind) {
  if (kind === 'nodes') {
    return (node.children ?? []).map((cid) => ({
      key: '/project/nodes',
      node: model.project.nodes[cid],
    }));
  }

  return [];
}

function drawNode(model, node, key, results) {
  const kind = key.split('/').pop();
  const id = node.id ?? getId(node);

  let nodeFlags = (
    ImGui.ImGuiTreeNodeFlags.OpenOnArrow
    | ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick
    | ImGui.ImGuiTreeNodeFlags.SpanAvailWidth
  );

  const selection = model.session.selections[0];
  if (selection && id === selection.id) {
    nodeFlags |= ImGui.ImGuiTreeNodeFlags.Selected;
  }

  const children = getChildren(model, node, kind);

  if (children.length === 0) {
    nodeFlags |= ImGui.ImGuiTreeNodeFlags.Leaf;
    nodeFlags |= ImGui.ImGuiTreeNodeFlags.Bullet;
  }

  const nodeOpen = ImGui.TreeNodeEx(id, nodeFlags, node.name ?? '---');
  if (ImGui.IsItemClicked()) {
    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind,
        key,
        id,
      }],
    });
  }
  if (nodeOpen) {
    children.forEach((c) => drawNode(model, c.node, c.key, results));
    ImGui.TreePop();
  }
}

function drawTree(model, key, header, results) {
  if (key.startsWith('/project/') && !model.project) {
    return;
  }
  const kind = key.split('/').pop();
  let headerNodeFlags = ImGui.ImGuiTreeNodeFlags.None;
  headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.OpenOnArrow;
  headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.SpanTextWidth;

  const selection = model.session.selections[0];
  if (selection?.kind === kind) {
    headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.DefaultOpen;

    if (selection?.id === null) {
      headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.Selected;
    }
  }

  const opened = ImGui.TreeNodeEx(key, headerNodeFlags, header);
  if (ImGui.IsItemClicked()) {
    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind,
        key,
        id: null,
      }],
    });
  }

  if (opened) {
    const collection = jsonpatch.getValueByPointer(model, key);
    if (!collection) {
      console.warn(`Unable to find a collection with the key ${key}`);
    } else {
      Object.values(collection).forEach((value) => drawNode(model, value, key, results));
    }
    ImGui.TreePop();
  }
}

function AssetBrowserView(model, trees, windowPos, windowSize, results) {
  ImGui.SetNextWindowPos(windowPos);
  ImGui.SetNextWindowSize(windowSize);
  const windowFlags = (
    ImGui.WindowFlags.None
    | ImGui.WindowFlags.AlwaysAutoResize
    | ImGui.WindowFlags.NoCollapse
  );
  ImGui.Begin('Asset Browser', null, windowFlags);
  trees.forEach((tree) => drawTree(model, tree.key, tree.label, results));
  ImGui.End();
}

export default AssetBrowserView;
