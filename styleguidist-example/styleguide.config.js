const { createConfig, match } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')
// const { createConfig, babel } = require('webpack-blocks')
module.exports = {
  webpackConfig: createConfig([
    match(['*.jsx', '!*node_modules*'], [
      babel(/* options */)
    ])
  ])
}
