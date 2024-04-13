import basicSsl from '@vitejs/plugin-basic-ssl';
import wasm from 'vite-plugin-wasm';

export default {
  base: '/zenbuforge/',
  plugins: [
    basicSsl(),
    wasm(),
  ],
};
