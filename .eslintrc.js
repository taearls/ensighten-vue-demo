module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "vue/no-v-html": "off",
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    "eol-last": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "prefer-template": ["error"],
    "space-before-function-paren": ["error", "never"],
    semi: ["error", "always"],
    eqeqeq: ["error", "smart"],
    quotes: [2, "double", { avoidEscape: true }],
  },
};
