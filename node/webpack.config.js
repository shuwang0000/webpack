const {resolve} = require('path')
module.exports = {
    target:'node',
    mode: 'production',
    entry: {
        app:'./src/main.js'
    },
    output: {
        path: resolve(__dirname, './build'),
        filename:'[name].js'
    }
}