module.exports = (config) => {
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
        '@axios': path.resolve(__dirname, 'src/$http-config/index.js'),
        '@api': path.resolve(__dirname, 'src/$api-config/index.js')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 生产环境去掉 console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    } else {
      // 为开发环境修改配置...
    }
    config.pulugin = []
}