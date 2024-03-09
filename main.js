import Zenbuforge from './lib/Zenbuforge';

const canvas = document.getElementById('viewport');
const zenbuforge = new Zenbuforge(canvas);
window.onresize = () => zenbuforge.resize(window.innerWidth, window.innerHeight);
zenbuforge.resize(window.innerWidth, window.innerHeight);

function loop() {
  zenbuforge.update();
  requestAnimationFrame(loop);
}

Promise.resolve()
  .then(() => zenbuforge.init())
  .then(() => {
    loop();
  });
