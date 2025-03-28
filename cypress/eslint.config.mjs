export default [
  {
    plugins: {
      cypress: require('eslint-plugin-cypress'),
    },
    extends: ['plugin:cypress/recommended'],
    rules: {
      'cypress/no-force': 'error',
      'cypress/assertion-before-screenshot': 'error',
      'cypress/no-pause': 'error',
    },
  },
]
