module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "quotes": ["error", "double", {"avoidEscape": true}],
    "no-unused-vars": ["off"],
    "semi": ["error", "always"],
    "block-spacing": ["error", "always"],
    "no-multi-spaces": ["error"],
    "eqeqeq": ["error", "always"],
    "no-empty-function" : ["error"],
  },
}
