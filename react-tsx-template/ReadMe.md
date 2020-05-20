配置ts
1、安装局部的typescript, 才可以使用tsc命令
2、tsc --init 生成tsconfig.json默认文件

配置一个webpack
1、初始化package.json文件
    npm init -y
2、创建webpack.config.js
3、npx 可以执行依赖包里的二进制文件
    安装5.2.0以上的npm版本会自带npx命令
    执行命令 ./node_modules/.bin/webpack -v 效果等价于 npx webpack -v
4、webpack 不认识css语言，需要加loader解析
    (1)安装css-loader style-loader
    css-loader: 将css文件当成一个模块引入到js文件中
    style-loader: 能在html中创建一个<style></style>标签,标签里的内容就是CSS内容
    (2)安装postcss-loader, 需要添加postcss.config.js配置文件
    作用：给css3添加前缀、样式格式校验(stylelint)、css模块化、提前使用css新特性(表格属性)
    (3)安装mini-css-extract-plugin
    作用: 将css抽成单独的文件, 配合插件使用
5、压缩js、css
    (1) 压缩css——optimize-css-assets-webpack-plugin
    (2)压缩js——terser-webpack-plugin
6、html-webpack-plugin
    作用：根据提供的模板自动生成 HTML 文件, 动态引入js(script)、css(link)文件
7、对图片进行解析
    (1)安装url-loader file-loader
    作用：安装url-loader的时候就会要求安装file-loader, 会把图片单独打包出来
    (2)安装image-webpack-loader
    作用：对图片进行压缩
8、删除包
    安装: clean-webpack-plugin
9、监听文件变化, 自动编译
    webpack --watch (还需要手动刷新)
10、提供了一个web服务器, 实现热更新和代理, 编译速度快(编译在内存里)
    安装webpack-dev-server
11、将es6转成es5
    安装 babel-loader @babel/core @babel/preset-env
12、使用react
    安装 react、react-dom
    为支持jsx语法, 安装 @babel/preset-react
    为了支持<If>等条件语句标签 安装 babel-plugin-jsx-control-statements
13、配置eslint
    安装 eslint、babel-eslint、
    校验react 安装 eslint-plugin-react
    校验判断语句 安装 eslint-plugin-jsx-control-statements
14、打包模块报表
    安装 webpack-bundle-analyzer
15、有些浏览器对es6支持的不好，需要在入口文件引入
    import 'core-js/stable'
    import 'regenerator-runtime/runtime'
    安装 core-js regenerator-runtime

问题列表
1、webpack 中配置了alias，在 TS 中使用时会出现找不到模块
    解决方案：
    只需在 tsconfig.json 添加baseUrl和paths的配置即可
    https://daief.github.io/2018-09-04/declaration-files-of-typescript.html