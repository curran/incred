var template = require('lodash.template')
var fs = require('fs')

var cache = {}
function getTemplate (filePath, callback) {
  if(cache[filePath]){
    callback(null, cache[filePath])
  } else {
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err)
      cache[filePath] = template(content.toString())
      callback(null, cache[filePath])
    })
  }
}

function templateEngine(filePath, options, callback) {
  getTemplate(filePath, function (err, compiledTemplate) {
    if (err) return callback(err)
    return callback(null, compiledTemplate(options))
  })
}

module.exports = templateEngine
