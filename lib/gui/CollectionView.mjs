import Results from './Results.mjs';
import View from './View.mjs';

class CollectionView extends View {
  update(model, windowPos, windowSize) {
    const results = new Results();

    const selection = model.session.selections[0];
    if (typeof selection === 'undefined') {
      return results;
    }

    this.beginDraw(windowPos, windowSize);

    this.drawActions(model, null, results);

    this.endDraw();

    return results;
  }
}

export default CollectionView;
