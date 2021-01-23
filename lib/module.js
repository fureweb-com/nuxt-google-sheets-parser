const { resolve } = require('path')

module.exports = (moduleOptions) => {
  const options = {
    ...this.options['nuxt-public-google-sheets-parser'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-public-google-sheets-parser.js',
    options
  })
}

module.exports.meta = require('../package.json')
