import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class TreeView extends AbstractView {
  constructor(name, options) {
    super(name, 'list', options);
  }

  draw(model) {
    return [];
  }
}

export default TreeView;
