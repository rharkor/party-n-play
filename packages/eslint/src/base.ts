import globals from "globals"
import tseslint from "typescript-eslint"

import baseConfig from "./configs/base"
import jsdocConfig from "./configs/jsdoc"
import jsonConfig from "./configs/json"
import perfectionistConfig from "./configs/perfectionist"
import promiseConfig from "./configs/promise"
import simpleImportSortConfig from "./configs/simple-import-sort"
import sonarjsConfig from "./configs/sonarjs"
import stylisticConfig from "./configs/stylistic"
import typescriptConfig from "./configs/typescript"
import unicornConfig from "./configs/unicorn"
import unusedImports from "./configs/unused-imports"

const config = tseslint.config(
  ...jsonConfig,
  ...baseConfig,
  ...typescriptConfig,
  ...jsdocConfig,
  ...sonarjsConfig,
  ...unicornConfig,
  ...promiseConfig,
  ...unusedImports,
  ...stylisticConfig,
  ...perfectionistConfig,
  ...simpleImportSortConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 5,
      sourceType: "commonjs",

      parserOptions: {
        project: true,
      },
    },

    rules: {
      "@typescript-eslint/no-invalid-this": "off", // why?
      "@typescript-eslint/quotes": "off", // why?
      "sonarjs/function-return-type": "off",
    },
    ignores: ["**/dist/", "**/build/", "**/logs/", "tsconfig.**", "**/eslint.config.js"],
  }
)

export default config
