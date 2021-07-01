const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  chainWebpack: () => {
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
  },
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else {
      // 生产环境配置
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8 // 压缩比
          })
        ]
      }
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src') // 设置路径别名
          // ...
        }
      }
    })
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置 配置高于chainWebpack中关于css loader的配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      },
      sass: {
        prependData: `
          @import "@/assets/styles/variable.scss";
          @import "@/assets/styles/mixin.scss";
          @import "@/assets/styles/global.scss";
          @import "@/assets/styles/reset.scss";
        `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    iconPaths: {
      favicon32: '../frontend/favicon.ico',
      favicon16: '../frontend/favicon.ico',
      appleTouchIcon: '../frontend/favicon.ico',
      maskIcon: '../frontend/favicon.ico',
      msTileImage: '../frontend/favicon.ico'
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 9090,
    https: false,
    hotOnly: false,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    } // 设置代理
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
