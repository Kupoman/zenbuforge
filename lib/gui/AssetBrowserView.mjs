import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';

import * as ImGui from './extern/imgui.mjs';

import Results from './Results.mjs';

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

function drawNode(model, node, key) {
  const kind = key.split('/').pop();
  let results = new Results();
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
    children.forEach((c) => results = results.mergeResults(drawNode(model, c.node, c.key)));
    ImGui.TreePop();
  }

  return results;
}

function drawTree(model, key, header) {
  let results = new Results();
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
      Object.values(collection).forEach((value) => {
        results = results.mergeResults(drawNode(model, value, key));
      });
    }
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

    results = results.mergeResults(drawTree(model, '/projectList/projects', 'Projects'));

    if (model.project) {
      results = results.mergeResults(drawTree(model, '/project/scenes', 'Scenes'));
      results = results.mergeResults(drawTree(model, '/project/nodes', 'Nodes'));
      results = results.mergeResults(drawTree(model, '/project/meshes', 'Meshes'));
      results = results.mergeResults(drawTree(model, '/project/textures', 'Textures'));
      results = results.mergeResults(drawTree(model, '/project/materials', 'Materials'));
      results = results.mergeResults(drawTree(
        model,
        '/project/extensions/KHR_lights_punctual/lights',
        'Lights',
      ));
      results = results.mergeResults(drawTree(model, '/project/cameras', 'Cameras'));
    }

    ImGui.End();

    return results;
  }
}

export default AssetBrowserView;
