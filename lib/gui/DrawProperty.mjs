import * as ImGui from './extern/imgui.mjs';

export function text(label, value, args) {
  const edit = { text: value };
  let flags = ImGui.InputTextFlags.None;
  if (args?.readOnly) {
    flags |= ImGui.InputTextFlags.ReadOnly;
  }
  const changed = ImGui.InputText(
    label,
    (newValue = edit.text) => edit.text = newValue,
    100,
    flags,
  );
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
  const { mapValues } = args;

  if (options.length === 0) {
    return null;
  }

  let edit = 0;
  if (mapValues) {
    edit = mapValues.indexOf(value);
  } else {
    edit = options.indexOf(value);
  }
  const changed = ImGui.Combo(
    label,
    (_ = edit) => edit = _,
    args.options ?? [],
  );

  const result = (mapValues) ? mapValues[edit] : options[edit];
  return (changed) ? result : null;
}

export function float(label, value, args) {
  const edit = [value];

  const changed = ImGui.DragFloat(
    label,
    edit,
    args?.step,
    args?.min,
    args?.max,
    args?.display,
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
    args?.display,
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
    args?.display,
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

export function listRef(label, value, args, _refMap) {
  const refMap = { ..._refMap, ...{ None: 'None' } };
  const list = [];
  let changed = false;

  if (ImGui.CollapsingHeader(label)) {
    (value ?? []).forEach((v, i) => {
      ImGui.PushID(i);
      const result = ref('', v, args, refMap);
      if (result !== null) {
        changed = true;
        list.push(result);
      } else {
        list.push(v);
      }
      ImGui.PopID();
    });
    const result = ref('', 'None', args, refMap);
    if (result !== null) {
      changed = true;
      list.push(result);
    }
    ImGui.Separator();
  }

  return (changed) ? list.filter((i) => i) : null;
}
