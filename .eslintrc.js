module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-duplicate-imports': ['error'],
    'object-shorthand': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
