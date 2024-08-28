import * as ImGui from './extern/imgui.mjs';

export function text(label, value, args) {
  const edit = { text: value };
  const changed = ImGui.InputText(label, (newValue = edit.text) => edit.text = newValue, 100);
  return (!args?.readOnly && changed) ? edit.text : null;
}

export function boolean(label, value) {
  const edit = [value];
  const changed = ImGui.Checkbox(
    label,
    edit,
  );

  return (changed) ? edit[0] : null;
}

export function combo(label, value, args) {
  const options = args.options ?? [];
  let edit = options.indexOf(value);
  const changed = ImGui.Combo(
    label,
    (_ = edit) => edit = _,
    args.options ?? [],
  );

  if (options.length === 0) {
    return null;
  }

  return (changed) ? options[edit] : null;
}

export function float(label, value, args) {
  const edit = [value];
  const changed = ImGui.DragFloat(
    label,
    edit,
    args?.step,
    args?.mini,
    args?.max,
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
    args?.step,
    args?.min,
    args?.max,
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
    args?.step,
    args?.min,
    args?.max,
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
    args?.step,
    args?.min,
    args?.max,
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
    args?.step,
    args?.min,
    args?.max,
  );

  return (changed) ? [edit.x, edit.y, edit.z, edit.w] : null;
}

export function ref(label, value, args, refMap) {
  const flags = ImGui.ComboFlags.None;
  let selection = value ?? 'None';
  let changed = false;
  if (ImGui.BeginCombo(label, refMap[selection], flags)) {
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

  if (selection === 'None') {
    selection = undefined;
  }

  return (changed) ? selection : null;
}

export function textureRef(label, value, args, refMap) {
  const result = ref(label, value?.index, args, refMap);
  if (typeof result === 'undefined') {
    return result;
  }

  let changed = result !== null;
  const info = {
    index: result ?? value?.index,
    texCoord: value?.texCoord ?? 0,
  };

  if (info.index) {
    const edit = [info.texCoord];
    if (ImGui.InputInt(`${label} TEXCOORD`, edit)) {
      [info.texCoord] = edit;
      changed = true;
    }
  }

  return (changed) ? info : null;
}
