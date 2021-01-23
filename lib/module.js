import { resolve } from 'path'

export default function () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxtjs-public-google-sheets-parser.js'
  })
}
