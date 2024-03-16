import * as ImGui from '../extern/imgui.mjs';

import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class TreeView extends AbstractView {
  constructor(name, options) {
    super(name, 'list', options);
  }

  draw(model) {
    const updates = [];

    const drawNode = (node) => {
      let nodeFlags = (
        ImGui.ImGuiTreeNodeFlags.OpenOnArrow
        | ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick
        | ImGui.ImGuiTreeNodeFlags.SpanAvailWidth
      );

      if (node.id === model.selection) {
        nodeFlags |= ImGui.ImGuiTreeNodeFlags.Selected;
      }

      if (node.children.length === 0) {
        nodeFlags |= ImGui.ImGuiTreeNodeFlags.Leaf;
      }

      const nodeOpen = ImGui.TreeNodeEx(node.id, nodeFlags, node.name);
      if (ImGui.IsItemClicked()) {
        updates.push({
          action: 'update',
          key: 'selection',
          data: node.id,
        });
      }
      if (nodeOpen) {
        (node.children ?? []).forEach((c) => drawNode(c));
        ImGui.TreePop();
      }
    };
    (model.items ?? []).forEach((node) => drawNode(node));

    return updates;
  }
}

export default TreeView;
