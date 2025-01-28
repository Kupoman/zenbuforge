import View from './View.mjs';

class CollectionView extends View {
  update(model, windowPos, windowSize, results) {
    this.beginDraw(windowPos, windowSize);
    this.drawActions(model, null, results);
    this.endDraw();
  }
}

export default CollectionView;
