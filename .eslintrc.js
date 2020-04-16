module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
      'prettier',
      'prettier/react',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaFeatures: {
        jsx: true,
        tsx: true,
        ts: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      "import/no-unresolved": "off",
      "import/extensions": "off",
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', 'js', 'tsx', 'ts'] }
      ],
      'import/prefer-default-export': 'off'
    },
  };
