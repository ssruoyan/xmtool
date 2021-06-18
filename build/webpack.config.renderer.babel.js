import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/renderer/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm', '.yaml'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: true,
      publicPath: '/'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3333,
    historyApiFallback: true
  }
}