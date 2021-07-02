// 配置文件
const CracoLessPlugin = require('craco-less')
const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ffc318' },
            javascriptEnabled: true
          }
        }
      }
    },
    { plugin: CracoAntDesignPlugin }
  ]
}
