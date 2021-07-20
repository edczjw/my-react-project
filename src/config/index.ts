export default {
    development: {
      cdn: './',
      apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
    }, 
    production: {
      cdn: 'allenboy.cn/', // 正式环境 cdn 路径
      apiBaseUrl: '//www.xxx.com/v1' // 正式环境接口地址
    }
  }