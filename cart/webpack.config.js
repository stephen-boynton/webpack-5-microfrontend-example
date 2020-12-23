const HWP = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = { 
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js', // no reason to ever change this name
      exposes: {
        // key is the same as import in container - this is aliasing
        './CartShow': './src/bootstrap'
      },
      shared: ['faker']
      /* -- a way to enforce only a single instance
      shared: {
        faker: {
          singleton: true
        }
      }
      */
    }),
    new HWP({
      template: './public/index.html'
    }),

  ]
}
