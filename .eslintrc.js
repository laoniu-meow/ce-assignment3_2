module.exports = {
  env: {
    node: true,
    es2021: true,
    commonjs: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Error rules
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': 'error',

    // Best practices
    eqeqeq: 'error',
    curly: 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',

    // Code style
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],

    // Node.js specific
    'no-process-exit': 'error',
    'no-path-concat': 'error'
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        mocha: true
      }
    }
  ]
};
