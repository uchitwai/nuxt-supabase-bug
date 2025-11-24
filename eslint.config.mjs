// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  // .eslintrc.json
  {
    "rules": {
      "@typescript-eslint/ban-ts-comment": "off"
    }
  }

)
