let path = require('path');
let glob = require("glob");

let entry = path.resolve(__dirname, '../src/index.js');
let outputPath = path.resolve(__dirname, '../dist');

// if (process.env.TESTBUILD) {
//     entry = glob.sync(__dirname + "../src/tests/**/*.test.js");
//     outputPath = path.resolve(__dirname, "../test-dist/");
// }

module.exports = {
    entry: entry,
    output: {
        path: outputPath,
        filename: 'index.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};