module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
    'spaced-comment': 'off',
    'no-else-return': 'off',
    parser: 'babel-eslint',
  },
};

/* npm install eslint -D
npm install eslint-plugin-prettier -D
npm install eslint-config-prettier -D
npm install prettier -D */

/* just install eslint and prettier & write .eslintrc.js like this */
