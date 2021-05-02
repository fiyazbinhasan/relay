const path = require('path')

module.exports = {
    devtool: "inline-source-map",
    entry: './ClientApp/app.js',
    output: {
        path: __dirname + "/wwwroot/dist",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["file?name=[name].[ext]"],
            },
            {
                type: "javascript/auto",
                test: /\.mjs$/,
                use: [],
                include: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", { modules: false }],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: [{ loader: "svg-inline-loader" }],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".mjs"],
    }
}