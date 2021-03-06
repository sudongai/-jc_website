const path = require('path')
const devServer = require('./src/config/devServer/index')
const publicPathsMap = {
    development: './',
    production: './'
}
module.exports = {
    publicPath: publicPathsMap[process.env.NODE_ENV] || '', // 项目部署基础路径.
    outputDir: 'dist', // 项目构建文件目录.
    productionSourceMap: false, // 项目构建是否生成sourceMap文件.
    devServer, // 关于服务配置
    chainWebpack: (config) => {
        // 查看打包体积大小
        // config
        //     .plugin('webpack-bundle-analyzer')
        //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },
    configureWebpack: config => {
        config.entry = './src/main.js'
        config.resolve = {
            extensions: [
                '.mjs',
                '.js',
                '.jsx',
                '.vue',
                '.json',
                '.wasm',
                '.ts',
                '.tsx'
            ],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@common': path.resolve(__dirname, 'src/assets'),
                '@mixins': path.resolve(__dirname, 'src/mixins'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@views': path.resolve(__dirname, 'src/views'),
                '@axios': path.resolve(__dirname, 'src/$http/index.js'),
                '@api': path.resolve(__dirname, 'src/api/index.js'),
                '@util': path.resolve(__dirname, 'src/util')
            }
        }
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            // 生产环境去掉 console.log
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        } else {
            // 为开发环境修改配置...
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/css/mixins.less")]
        }
    }
}