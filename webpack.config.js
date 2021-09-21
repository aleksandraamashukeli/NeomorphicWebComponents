const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
   target:'web',
    mode: 'production',
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'main.js',
      library:"neomorphicwebcomponents",
      libraryTarget:'umd',
      path: path.resolve(__dirname, 'lib'),
      globalObject:'this',
      umdNamedDefine:true,
  
    },
    devServer: {
      contentBase: path.join(__dirname, 'lib'),
      compress: true,
      port: 9000,
    },
}