const rewireTypescript = require('react-app-rewire-typescript')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  config = rewireTypescript(config, env)
  config = rewireReactHotLoader(config, env)
  return config
}