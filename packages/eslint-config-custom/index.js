module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-key': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prefer-spread': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    'quotes': ['error', 'single']
  },
};
