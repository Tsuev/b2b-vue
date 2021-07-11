module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://test.tk-badr.ru/',
                changeOrigin: true,
                secure:false,
                pathRewrite: {'^/api': '/api'},
                logLevel: 'debug' 
            },
        }
    }
}

// 'http://test.tk-badr.ru/'