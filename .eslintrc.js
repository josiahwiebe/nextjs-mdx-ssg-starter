module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'eslint-config-react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['prettier', 'eslint-plugin-react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error', 'log', 'table'] }],
    'no-return-await': 'error',
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
