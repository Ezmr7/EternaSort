import path from 'path'
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpack = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[contenthash].js',
    clean: true,
      assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/': 'http://localhost:3000',
    },
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}

export default webpack;