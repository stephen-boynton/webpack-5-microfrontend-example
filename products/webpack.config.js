const HWP = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = { 
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js', // no reason to ever change this name
      exposes: {
        // key is the same as import in container - this is aliasing
        './ProductsIndex': './src/bootstrap'
      },
      shared: ['faker']
    }),
    new HWP({
      template: './public/index.html'
    }),

  ]
}
