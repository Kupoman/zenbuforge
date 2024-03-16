import * as ImGui from '../extern/imgui.mjs';

function deepGet(object, key) {
  let current = object;
  key.split('.').forEach((subKey) => {
    if (typeof current === 'undefined') {
      return;
    }
    current = current[subKey];
  });
  return current;
}

function deepSet(object, key, value) {
  const path = key.split('.');
  const finalKey = path[path.length - 1];
  const subPath = path.slice(0, path.length - 1);
  let parent = object;
  subPath.forEach((subKey) => {
    parent = parent[subKey];
  });
  parent[finalKey] = value;
  return value;
}

export function Text(name, obj, key) {
  ImGui.InputText(name, (value = deepGet(obj, key)) => deepSet(obj, key, value), 100);
}

export function Scalar(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = [deepGet(obj, key)];
  ImGui.DragFloat(name, edit, step, min, max);
  deepSet(obj, key, edit[0]);
}

export function Vec3(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z] = deepGet(obj, key);
  ImGui.DragFloat3(name, edit, step, min, max);
  deepSet(obj, key, [edit.x, edit.y, edit.z]);
}

export function Vec4(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z, edit.w] = deepGet(obj, key);
  ImGui.DragFloat4(name, edit, step, min, max);
  deepSet(obj, key, [edit.x, edit.y, edit.z, edit.w]);
}

export function Color4(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z, edit.w] = deepGet(obj, key);
  ImGui.ColorEdit4(name, edit, step, min, max);
  deepSet(obj, key, [edit.x, edit.y, edit.z, edit.w]);
}

export function Json(json) {
  ImGui.Text('JSON');
  ImGui.BeginChild('JSON');
  ImGui.Text(JSON.stringify(json, null, 2));
  ImGui.EndChild();
}

export function text(label, model, key) {
  Text(label, model, key);
}

export function float(label, model, key, args) {
  Scalar(label, model, key, args?.step, args?.min, args?.max);
}

export function float3(label, model, key, args) {
  Vec3(label, model, key, args?.step, args?.min, args?.max);
}

export function float4(label, model, key, args) {
  Vec4(label, model, key, args?.step, args?.min, args?.max);
}

export function color4(label, model, key, args) {
  Color4(label, model, key, args?.step, args?.min, args?.max);
}
