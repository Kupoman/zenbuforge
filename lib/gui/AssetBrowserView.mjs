import * as uuid from 'uuid';

import * as ImGui from './extern/imgui.mjs';

import Results from './Results.mjs';

function getId(obj) {
  return obj?.extensions?.ZF_id?.id;
}

function getChildren(model, node, kind) {
  if (kind === 'nodes') {
    return (node.extensions.ZF_id.children ?? []).map((cid) => ({
      kind: 'nodes',
      node: model.project.nodes[cid],
    }));
  }

  return [];
}

function drawNode(model, node, kind) {
  let results = new Results();
  const id = getId(node);

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
  }

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
    children.forEach((c) => results = results.mergeResults(drawNode(model, c.node, c.kind)));
    ImGui.TreePop();
  }

  return results;
}

function drawTree(model, key, header) {
  let results = new Results();
  let headerNodeFlags = ImGui.ImGuiTreeNodeFlags.None;
  headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.OpenOnArrow;
  headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.SpanTextWidth;

  if (model.session.selections[0]?.kind === key) {
    headerNodeFlags |= ImGui.ImGuiTreeNodeFlags.DefaultOpen;
  }

  const opened = ImGui.TreeNodeEx(key, headerNodeFlags, header);
  ImGui.SameLine();
  if (ImGui.Button('Add')) {
    const id = uuid.v4();
    const value = {
      name: id,
      extensions: {
        ZF_id: {
          id,
        },
      },
    };

    if (key === 'meshes') {
      value.primitives = [];
    }

    results.addUpdate({
      op: 'add',
      path: `/project/${key}/${id}`,
      value,
    });

    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind: key,
        id,
      }],
    });
  }

  if (opened) {
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
