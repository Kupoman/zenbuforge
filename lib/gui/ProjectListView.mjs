import * as uuid from 'uuid';

import * as ImGui from './extern/imgui.mjs';

import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class ProjectListView extends AbstractView {
  constructor(options) {
    super('Projects', '', options);
    this.importUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/Box.gltf';
    this.newProjectName = 'Untitled';
  }

  draw(model) {
    const results = new Results();
    if (ImGui.BeginTable('Projects', 3)) {
      ImGui.TableSetupColumn('FirstButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('SecondButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('Name', ImGui.TableColumnFlags.WidthStretch);

      ImGui.TableNextColumn();

      ImGui.TableNextColumn();
      if (ImGui.Button('Create')) {
        results.addProjectListUpdate({
          action: 'add',
          id: this.newProjectName,
          data: {
            id: uuid.v4(),
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

      Object.entries(model.projectList).forEach(([name, data]) => {
        ImGui.PushID(name);
        ImGui.TableNextColumn();
        if (ImGui.Button('Switch')) {
          results.addCall({
            method: 'loadProject',
            params: [data.id],
          });
        }

        ImGui.TableNextColumn();
        if (ImGui.Button('Delete')) {
          results.addProjectListUpdate({
            action: 'delete',
            id: name,
          });
        }

        ImGui.TableNextColumn();
        ImGui.Text(name);

        ImGui.TableNextRow();
        ImGui.PopID(name);
      });
      ImGui.EndTable();
    }

    if (ImGui.Button('Import')) {
      results.addCall({
        method: 'loadFile',
        params: [this.importUrl],
      });
    }
    return results;
  }
}

export default ProjectListView;
