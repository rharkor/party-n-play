import globals from "globals"
import tseslint from "typescript-eslint"

import baseConfig from "./configs/base.js"
import jsdocConfig from "./configs/jsdoc.js"
import jsonConfig from "./configs/json.js"
import perfectionistConfig from "./configs/perfectionist.js"
import promiseConfig from "./configs/promise.js"
import simpleImportSortConfig from "./configs/simple-import-sort.js"
import sonarjsConfig from "./configs/sonarjs.js"
import stylisticConfig from "./configs/stylistic.js"
import typescriptConfig from "./configs/typescript.js"
import unicornConfig from "./configs/unicorn.js"
import unusedImports from "./configs/unused-imports.js"

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
