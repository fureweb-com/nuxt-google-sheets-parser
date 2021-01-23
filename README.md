# nuxt-google-sheets-parser

<!-- [![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href] -->

> public google sheets parser for nuxt.js

<!-- [📖 **Release Notes**](./CHANGELOG.md) -->

## Setup

1. Add `nuxt-google-sheets-parser` dependency to your project

```bash
yarn add nuxt-google-sheets-parser
# or npm install nuxt-google-sheets-parser
```

2. Add `nuxt-google-sheets-parser` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-google-sheets-parser'
  ]
}
```

## Usage Example
- In your page or components on nuxt.js

```js
// ...
export default {
  // ...
  methods: {
    parseSheet (sheetId, sheetName = null) {
      return this.$gsparser.parse(sheetId, sheetName)
    }
  },
  async mounted () {
    // see: https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps
    const sheetId = '10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps'

    const data1 = await this.parseSheet(sheetId)
    console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]

    const data2 = await this.parseSheet(sheetId, 'Sheet2')
    console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}]
  },
  // ...
}
```

- [see more latest usage here](https://github.com/fureweb-com/public-google-sheets-parser)

## License

[MIT License](./LICENSE)

Copyright (c) Jihwan Oh

<!-- Badges -->
<!-- [npm-version-src]: https://img.shields.io/npm/v/nuxt-google-sheets-parser/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-google-sheets-parser

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-google-sheets-parser.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-google-sheets-parser

[github-actions-ci-src]: https://github.com/https://github.com/fureweb-com/nuxt-google-sheets-parser/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/https://github.com/fureweb-com/nuxt-google-sheets-parser/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/fureweb-com/nuxt-google-sheets-parser.svg
[codecov-href]: https://codecov.io/gh/https://github.com/fureweb-com/nuxt-google-sheets-parser

[license-src]: https://img.shields.io/npm/l/nuxt-google-sheets-parser.svg
[license-href]: https://npmjs.com/package/nuxt-google-sheets-parser -->
