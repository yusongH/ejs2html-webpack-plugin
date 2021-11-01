const ejs2html = require('./lib/ejs2html')

class ejs2htmlWebpackPlugin {
  constructor(options) {
    // 目标文件路径
    this.targetPath = options.targetPath
    // 传入ejs的数据
    this.data = options.data
    // 文件名
    this.fileName = options.fileName
  }

  apply(compiler) {
    // 异步操作
    compiler.hooks.emit.tapAsync(
      "ejs2htmlWebpackPlugin",
      (compilation, cb) => {
        ejs2html(this.targetPath, this.data, html => {
          // 输出文件
          compilation.assets[this.fileName] = {
            source:function(){
              return html
            },
            size:function(){
              return html.length
            }
          };
          
          cb()
        })
      }
    )
  }
}

module.exports = ejs2htmlWebpackPlugin