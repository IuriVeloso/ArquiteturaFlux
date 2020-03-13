module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension':[
      'warn',
        { extensions : ['.jsx', '.js']}
    ],
    "react/jsx-indent": [0],
    "indent":[0],
    "react/jsx-indent-props": [2, 4],
    "jsx-a11y/control-has-associated-label": [0],
    'import/prefer-default-export':'off',
    'no-console': ["error", {allow: ['tron']}],
    'react/prop-types': 0,
    'no-param-reassign' : 0,
  },
};
