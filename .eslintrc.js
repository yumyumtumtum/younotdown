module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'react/jxs/use-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 0,
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'prettier/prettier': ['error', { semi: false, singleQuote: true }],
    'no-unused-vars': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'operator-linebreak': ['error', 'after'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    // 'max-len': ['error', { code: 100 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
