module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-multiple-template-root': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/sort-keys': 'off',
    'template-curly-spacing': ['error', 'never'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // 'vue/component-name-in-template-casing': ['error', 'never'],
    camelcase: ['error', { ignoreDestructuring: true }]
  }
}
