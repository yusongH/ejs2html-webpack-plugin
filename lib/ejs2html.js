const fs = require('fs');
const ejs = require('ejs');

/**
 * 将ejs转成html
 * @param {string} ejsPath ejs文件路径（绝对路径）
 * @param {string} variable 传入ejs的变量
 * @param {string} callback 回调，用于回传html
 */
const ejs2html = (ejsPath, variable, callback) => {
  fs.readFile(ejsPath, 'utf-8', (err, data) => {
    if (err) throw err
    const html = ejs.render(data, variable)
    callback(html)
  })
}

module.exports = ejs2html