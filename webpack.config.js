// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

//const isProduction = process.env.NODE_ENV == 'production';
const isProduction = true


const stylesHandler = 'style-loader';



const config = {
    entry: './src/web/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/web/index.html',
        }),
      new webpack.DefinePlugin({
        'process.env' : {
          "NODE_DEBUG": undefined
        },
      }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
      fallback: {
          "assert": false,
      },

    }
};

module.exports = (env, argv) => {
    // console.log('env: ', env);
    // console.log('argv: ', argv);

    if (isProduction) {
        config.mode = 'production';

        if (env.node) {
            config.target = 'node';
            config.output.filename = 'cli.js';
            config.entry = './src/cli/index.ts';
        }


    } else {
        config.mode = 'development';
    }
    return config;
};