import * as ImGui from './extern/imgui.mjs';

export function text(label, value, args) {
  const edit = { text: value };
  const changed = ImGui.InputText(label, (newValue = edit.text) => edit.text = newValue, 100);
  return (!args?.readOnly && changed) ? edit.text : null;
}

export function float(label, value, args) {
  const edit = [value];
  const changed = ImGui.DragFloat(
    label,
    edit,
    args?.step ?? 0.001,
    args?.mini ?? 0.0,
    args?.max ?? 1.0,
  );

  return (changed) ? edit[0] : null;
}

export function float3(label, value, args) {
  const edit = {
    x: value[0],
    y: value[1],
    z: value[2],
  };

  const changed = ImGui.DragFloat3(
    label,
    edit,
    args?.step ?? 0.001,
    args?.min ?? 0.0,
    args?.max ?? 1.0,
  );

  return (changed) ? [edit.x, edit.y, edit.z] : null;
}

export function float4(label, value, args) {
  const edit = {
    x: value[0],
    y: value[1],
    z: value[2],
    w: value[3],
  };

  const changed = ImGui.DragFloat4(
    label,
    edit,
    args?.step ?? 0.001,
    args?.min ?? 0.0,
    args?.max ?? 1.0,
  );

  return (changed) ? [edit.x, edit.y, edit.z, edit.w] : null;
}

export function color3(label, value, args) {
  const edit = {
    x: value[0],
    y: value[1],
    z: value[2],
  };

  const changed = ImGui.ColorEdit3(
    label,
    edit,
    args?.step ?? 0.001,
    args?.min ?? 0.0,
    args?.max ?? 1.0,
  );

  return (changed) ? [edit.x, edit.y, edit.z] : null;
}

export function color4(label, value, args) {
  const edit = {
    x: value[0],
    y: value[1],
    z: value[2],
    w: value[3],
  };

  const changed = ImGui.ColorEdit4(
    label,
    edit,
    args?.step ?? 0.001,
    args?.min ?? 0.0,
    args?.max ?? 1.0,
  );

  return (changed) ? [edit.x, edit.y, edit.z, edit.w] : null;
}

export function ref(label, value, args, refMap) {
  const flags = ImGui.ComboFlags.None;
  let selection = value;
  let changed = false;
  if (ImGui.BeginCombo(label, refMap[value], flags)) {
    Object.entries(refMap).forEach(([id, name]) => {
      const isSelected = (id === selection);
      if (ImGui.Selectable(name, isSelected)) {
        selection = id;
        changed = true;
      }
      if (isSelected) {
        ImGui.SetItemDefaultFocus();
      }
    });
    ImGui.EndCombo();
  }

  return (changed) ? selection : null;
}
