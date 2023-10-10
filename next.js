module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        tabWidth: 2,
        singleQuote: true,
        charset: "utf-8",
        jsxSingleQuote: true,
        jsxBracketSameLine: true,
        semi: false,
        bracketSameLine: true,
        bracketSpacing: true,
        arrowParens: "always",
        printWidth: 150,
        useTabs: false,
        endOfLine: "auto",
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            pattern: "components",
            group: "internal",
          },
          {
            pattern: "common",
            group: "internal",
          },
          {
            pattern: "routes/**",
            group: "internal",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
