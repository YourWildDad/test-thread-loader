const { resolve } = require('path')

const config = {
    mode: 'development',
    entry: {
        index: resolve(__dirname, 'src/index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /.js/,
            use: [
                {
                    loader: 'thread-loader',
                    options: {
                        numberOfWorkers: 1
                    }
                }
            ]
        }]
    },
    devtool: 'source-map'
}

module.exports = config