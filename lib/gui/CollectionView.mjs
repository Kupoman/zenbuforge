import Results from './Results.mjs';
import View from './View.mjs';

class CollectionView extends View {
  update(model, windowPos, windowSize) {
    const results = new Results();

    const selection = model.session.selections[0];

    this.beginDraw(windowPos, windowSize);
    if (typeof selection === 'undefined') {
      this.endDraw();
      return results;
    }

    this.drawActions(model, null, results);

    this.endDraw();

    return results;
  }
}

export default CollectionView;
