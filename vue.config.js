const path = require('path');
module.exports = {
    configureWebpack:{
        resolve: {
            extensions: ['.js','.vue','.json','.scss','.less','.css'],
            alias: {
                '@': path.resolve(__dirname, './src'),
            } // 别名配置
        }
    },
    devServer:{    								
        open:true,
        
    },
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    }
}