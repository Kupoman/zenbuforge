module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  overrides: [
    {
      files: [
        '*.mjs',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'no-return-assign': 'off',
    'import/extensions': ['warn', 'always'],
  },
};
