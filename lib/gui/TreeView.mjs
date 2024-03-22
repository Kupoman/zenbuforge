import * as ImGui from './extern/imgui.mjs';

import AbstractView from './AbstractView.mjs';

class TreeView extends AbstractView {
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

      if (!node.children || node.children.length === 0) {
        nodeFlags |= ImGui.ImGuiTreeNodeFlags.Leaf;
      }

      const display = (node.name !== '') ? node.name ?? '' : '---';
      const nodeOpen = ImGui.TreeNodeEx(node.id, nodeFlags, display);
      if (ImGui.IsItemClicked() && node.id !== model.selection) {
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
