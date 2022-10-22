const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    mode: 'development',
    entry: Object.fromEntries(
        fs.readdirSync("./mods")
        .map(x => 
            [
                `${x}/main`,
                {
                    import: "./"+path.posix.join("./mods", x, "./main.ts"),
                    library: {
                        type: 'module'
                    }
                }
            ]
        )
    ),
    /*entry: Object.fromEntries(
        fs.readdirSync("./mods")
        .map(x => 
            [
                x,
                "./"+path.posix.join("./mods", x, "./main.ts"),
            ]
        )
    ),*/
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    //"raw-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            zlib: require.resolve('browserify-zlib'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve("util/"),
            assert: require.resolve("assert/"),
            buffer: require.resolve("buffer/")
        },
        alias: {}
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
            // Make a global `process` variable that points to the `process` package,
            // because the `util` package expects there to be a global variable named `process`.
               // Thanks to https://stackoverflow.com/a/65018686/14239942
            process: 'process/browser'
        })
    ],
    optimization: {
        usedExports: true
    },
    experiments: {
        outputModule: true
    }
}
console.log(module.exports.entry)