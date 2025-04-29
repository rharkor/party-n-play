// @ts-expect-error -- no types for this plugin
import drizzle from "eslint-plugin-drizzle"
import tailwindcss from "eslint-plugin-tailwindcss"

import { FlatCompat } from "@eslint/eslintrc"

import baseConfig from "./base"
const compat = new FlatCompat({})

const config = [
  {
    ignores: [".next"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  ...compat.extends("next/core-web-vitals"),
  ...tailwindcss.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      drizzle,
    },
    rules: {
      "drizzle/enforce-delete-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
      "drizzle/enforce-update-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  ...baseConfig,
]

export default config
