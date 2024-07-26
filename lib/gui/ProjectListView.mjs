import * as uuid from 'uuid';

import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class ProjectListView {
  constructor(options) {
    const _options = options ?? {};
    this.size = _options.size ?? 1;
    this.name = 'Projects';
    this.importUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/Box.gltf';
    this.newProjectName = 'Untitled';
  }

  update(model, windowPos, windowSize) {
    const results = new Results();

    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    if (ImGui.BeginTable('Projects', 3)) {
      ImGui.TableSetupColumn('FirstButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('SecondButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('Name', ImGui.TableColumnFlags.WidthStretch);

      ImGui.TableNextColumn();

      ImGui.TableNextColumn();
      if (ImGui.Button('Create')) {
        const id = uuid.v4();
        results.addUpdate({
          op: 'add',
          path: `/projectList/items/${id}`,
          value: {
            name: this.newProjectName,
            id,
          },
        });
        this.newProjectName = '';
      }

      ImGui.TableNextColumn();
      const newValue = Draw.text('', this.newProjectName);
      if (newValue) {
        this.newProjectName = newValue;
      }
      ImGui.TableNextRow();

      Object.values(model.projectList.items).forEach((data) => {
        ImGui.PushID(data.name);
        ImGui.TableNextColumn();
        if (ImGui.Button('Switch')) {
          results.addCall({
            method: 'loadProject',
            params: [data.id],
          });
        }

        ImGui.TableNextColumn();
        if (ImGui.Button('Delete')) {
          results.addUpdate({
            op: 'remove',
            path: `/projectList/items/${data.id}`,
          });
        }

        ImGui.TableNextColumn();
        ImGui.Text(data.name);

        ImGui.TableNextRow();
        ImGui.PopID(data.name);
      });
      ImGui.EndTable();
    }

    if (ImGui.Button('Import')) {
      results.addCall({
        method: 'loadFile',
        params: [],
      });
    }

    ImGui.End();
    return results;
  }
}

export default ProjectListView;
