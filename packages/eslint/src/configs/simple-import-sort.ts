import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

export default tseslint.config({
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports
          ["server-only", "client-only"],
          // `react` first, `next` second
          ["^react$", "^next"],
          // Packages starting with a character
          ["^[a-z]"],
          // Packages starting with `@`
          ["^@"],
          // Packages starting with `~`
          ["^~"],
          // Imports starting with `../`
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Imports starting with `./`
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports
          ["^.+\\.s?css$"],
          // Side effect imports
          ["^\\u0000"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
})
