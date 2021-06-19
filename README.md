# ----react
ts/react/umi/docker/PC/移动/微前端

1、执行：yarn create @vitejs/app my-react-project --template react-ts
2、配置路径别名：alias

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
