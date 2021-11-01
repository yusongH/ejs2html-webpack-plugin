# 项目介绍
ejs2htmlWebpackPlugin是一款可以将ejs转为html，并将其打包的webpack插件。

# 安装和使用
## NPM
```bash
npm install ejs2htmlWebpackPlugin -D
```

## 在webpack.config.js中
```javascript
const Ejs2HtmlWebpackPlugin = require('ejs2html-webpack-plugin')

module.exports = {
  plugins: [
    new Ejs2HtmlWebpackPlugin({
      targetPath: '',
      data: {

      },
      fileName: 'test.html'
    })
  ]
}
```