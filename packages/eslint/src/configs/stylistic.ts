import tseslint from "typescript-eslint"

import stylisticPlugin from "@stylistic/eslint-plugin"

export default tseslint.config(stylisticPlugin.configs["disable-legacy"], {
  plugins: {
    "@stylistic/js": stylisticPlugin,
  },
  rules: {},
})
