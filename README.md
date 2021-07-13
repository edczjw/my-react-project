# ----react
ts/react/umi/docker/PC/移动/微前端

1、执行：yarn create @vitejs/app my-react-project --template react-ts
2、配置路径别名：alias
  // 设置路径别名 alias
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  }

---代码校验以及提交规范配置
3、安装 eslint / babel-eslint / eslint-plugin-react
yarn add eslint --dev
yarn add eslint-plugin-react
yarn add babel-eslint
创建.eslintrc.js文件并定义规则
4、安装prettier（Eslint 来提高我们编码的质量，但是却无法保证统一代码风格,使用 Prettier 在保存和提交代码的时候，将代码修改成统一的风格)
yarn add prettier eslint-config-prettier eslint-plugin-prettier
创建.prettierrc.js文件并定义规则
5、提交时校验
如果，我们想要使用 git 提交代码时，通过 prettier 来优化代码，还需要借助一些工具来完成。
husky：一个方便用来处理 pre-commit 、 pre-push 等 githooks 的工具
lint-staged：对 git 暂存区的代码，运行 linters 的工具
命令：yarn add lint-staged husky -D
在package.json添加
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{tsx,ts,js,jsx}": [
      "prettier --write",
      "eslint --fix --ignore-pattern **/*.d.ts"
    ],
    "src/**/*.{scss,css}": [
      "stylelint --fix"
    ],
    "src/**/*.{json,md}": [
      "prettier --write"
    ]
  },

  6、头部设计、菜单栏设计、内容页设置
  7、路由配置：yarn add -D @types/react-router-dom  yarn add @types/react-router
  创建一个routes目录 用于配置组件路由  然后再app.tsx引入遍历
  8、执行yarn build  发现静态资源达到524kb  过大了  因此使用静态资源按需加载的方式
  [
    dist/index.html                  0.43kb
    dist/assets/index.750d8bdd.css   524.54kb / brotli: skipped (large chunk)
    dist/assets/index.e8fe8dc2.js    3.03kb / brotli: 0.91kb
    dist/assets/vendor.7d4841a6.js   335.42kb / brotli: 92.67kb
    ✨  Done in 18.20s.
  ]
  安装 yarn add vite-plugin-imp -D
  vite.config.js 配置文件添加
  import vitePluginImp from 'vite-plugin-imp'
  vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
  })

  实现按需引入antd的样式less
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },

  执行yarn build  发现静态资源体积得到了很大改善
  dist/index.html                  0.43kb
  dist/assets/index.73633e2c.js    3.04kb / brotli: 0.92kb
  dist/assets/index.909d468b.css   32.02kb / brotli: 3.75kb
  dist/assets/vendor.a29228e7.js   335.41kb / brotli: 92.82kb
  ✨  Done in 15.52s.

  9、自定义定制全局设计主题
  styles目录创建variable.scss
  添加配置：
      scss: {
        // 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了
        additionalData: '@import "./src/styles/variables.scss";'
      }

  10、获取环境变量
  由于属于个人项目：只需要两个环境即可  开发环境以及生产环境
  根据不同环境配置不同的资源，如图片、接口地址、埋点、百度统计等等。
  修改package.json 的 scripts 属性：
    "dev": "vite --mode development",
    "build": "tsc && vite build --mode production",
  创建config目录：index.ts
  export default {
    development: {
      cdn: './',
      apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
    }, 
    production: {
      cdn: '//s.xxx.com/vite-react-app/release', // 正式环境 cdn 路径
      apiBaseUrl: '//www.xxx.com/v1' // 正式环境接口地址
    }
  }
  然后在配置文件添加：
  import config from './src/config'
  const env = process.argv[process.argv.length - 1]
  const base = config[env]
  base: base.cdn

  执行yarn build:prd
  打开dist/index.html可以看到指向了生产环境；

  11、如何获取环境变量？
  通过  import.meta.env 打印输出：
  {
    BASE_URL: "/"
    DEV: true
    MODE: "development"
    PROD: false
    SSR: false
  }