const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const common = require('./common')
const configs = require('./dev.config')

const PORT = common.server.defaultPort

new DevServer(webpack(configs), {
  publicPath: configs.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(PORT, erros => {
  if (erros) return console.log('Some errors to start the application:', erros)

  console.log(`Application is running! Go to http://localhost:${PORT} and have fun!`)
})
