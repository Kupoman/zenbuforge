import * as ImGui from './imgui';

export function Text(name, obj, key) {
  ImGui.InputText(name, (value = obj[key]) => obj[key] = value);
}

export function Vec3(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z] = obj[key];
  ImGui.DragFloat3(name, edit, step, min, max);
  obj[key] = [edit.x, edit.y, edit.z];
}

export function Vec4(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z, edit.w] = obj[key];
  ImGui.DragFloat4(name, edit, step, min, max);
  obj[key] = [edit.x, edit.y, edit.z, edit.w];
}
