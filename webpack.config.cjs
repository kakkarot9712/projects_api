const nodeExternals = require("webpack-node-externals")
const dotenv = require('dotenv')
const webpack = require('webpack')

dotenv.config()

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        // publicPath: '/dist/',
    },
    // devtool: "none",
    // devtool: "inline-source-map",
    // target: 'node',
    externalsPresets: {node: true},
    externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
    plugins: [new webpack.DefinePlugin({
       "process.env": JSON.stringify(process.env),
    })],
    resolve: {
        extensions: ['.ts', '.js']
    },
    // devServer : {
    //     server: [
    //         {
    //             directory: path.join(__dirname)
    //         }
    //     ]
    // }
}
