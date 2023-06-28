require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@buka/eslint-config/typescript/recommended'],
  extends: [
    '@buka/eslint-config/typescript/recommended',
  ],
  root: true,
  env: { node: true },
  parserOptions: { project: true },
}
