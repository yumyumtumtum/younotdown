module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "airbnb",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    // Add your project-specific ESLint rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
