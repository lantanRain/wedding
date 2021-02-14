var path = require('path');

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

            ],
        },
        devServer: {
            host: '127.0.0.1',
            contentBase: path.join(__dirname, "/"),
            compress: true,
            hot: true,
            inline: true,
            port: 9000,
            open: true
        },
        plugins: [
        ]
    }

    // 배포
    if (options.mode === 'production') {
        config.mode = 'production';
    }

    return config;
};
