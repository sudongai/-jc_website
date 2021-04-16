module.exports = (config) => {
  // 查看打包体积大小
  config
  .plugin('webpack-bundle-analyzer')
  .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
}