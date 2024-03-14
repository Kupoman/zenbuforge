import * as ImGui from '../extern/imgui.mjs';

export function Text(name, obj, key) {
  ImGui.InputText(name, (value = obj[key]) => obj[key] = value, 100);
}

export function Scalar(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = [obj[key]];
  ImGui.DragFloat(name, edit, step, min, max);
  obj[key] = edit[0];
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

export function Color4(name, obj, key, step = 0.001, min = 0.0, max = 1.0) {
  const edit = {};
  [edit.x, edit.y, edit.z, edit.w] = obj[key];
  ImGui.ColorEdit4(name, edit, step, min, max);
  obj[key] = [edit.x, edit.y, edit.z, edit.w];
}

export function Json(json) {
  ImGui.Text('JSON');
  ImGui.BeginChild('JSON');
  ImGui.Text(JSON.stringify(json, null, 2));
  ImGui.EndChild();
}
