import { resolve } from 'path'

export default function () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-google-sheets-parser.js'
  })
}
