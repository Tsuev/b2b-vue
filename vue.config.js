module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: 'http://test.tkbadr.ru',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    }
}