var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const config = {
        mode: "production",
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader'
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                }

            ],
        },
        devServer: {
            host: '0.0.0.0',
            contentBase: path.join(__dirname, "/"),
            compress: true,
            hot: true,
            inline: true,
            port: 9000,
            open: true,
            disableHostCheck: true
        },
        plugins: [
            // 기타 플러그인
            new MiniCssExtractPlugin({ filename: 'app.css' })
        ]

    }

    // 배포
    if (options.mode === 'production') {
        config.mode = 'production';
    }

    return config;
};
