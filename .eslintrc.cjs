module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": 2,
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowedNames": ["instance"]
      }
    ],
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "useDebounced"
    }]
  }
}
