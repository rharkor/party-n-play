import tseslint from "typescript-eslint"

import type { TSESLint } from "@typescript-eslint/utils"

import baseConfigs from "./base.js"

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(...baseConfigs, {
  rules: {
    // Both should be active, but needs refacto...
    strictNullChecks: 0,
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "sonarjs/prefer-nullish-coalescing": "off",

    "unicorn/prevent-abbreviations": [
      "warn",
      {
        allowList: {
          Param: true,
          Req: true,
          Res: true,
          Props: true,
          Args: true,
          args: true,
          Env: true,
          env: true,
          req: true,
          res: true,
          ctx: true,
        },
      },
    ],
  },
})

export default config
