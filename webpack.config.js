/*
 * Copyright (c) 2021  Thiago Lopes da Silva
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const args = require('yargs').argv;
const webpack = require('webpack');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const copyrightPluggin = webpack.BannerPlugin;

module.exports = {
  entry: {
    library: './tiktaktoe/src/index.ts',
    'library-cli': './tiktaktoe-cli/src/index.ts',
  },
  target: 'node',
  optimization: { minimize: false },
  stats: {
    errorDetails: true, //this does show errors
    colors: true,
    modules: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_module|dist)/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      tsyringe: require.resolve('tsyringe/dist/esm2015/index.js'),
    },
  },
  devtool: 'source-map',
  plugins: [
    new copyrightPluggin({
      banner: `
            Copyright (c) 2021  Thiago Lopes da Silva

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
            
                http://www.apache.org/licenses/LICENSE-2.0
            
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`,
      entryOnly: true,
    }),
    new webpack.ProgressPlugin(),
    new DuplicatePackageCheckerPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(args.context, '__bundle'),
    libraryTarget: 'umd',
    library: 'TikTakToeLibrary',
    umdNamedDefine: true,
  },
};
