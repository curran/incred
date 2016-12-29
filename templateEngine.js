var template = require('lodash.template')
var fs = require('fs')

var cache = {}
function getFile (filePath, callback) {
  if(cache[filePath]){
    callback(null, cache[filePath])
  } else {
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err)
      cache[filePath] = content
      callback(null, content)
    })
  }
}

function templateEngine(filePath, options, callback) {
  getFile(filePath, function (err, content) {
    if (err) return callback(err)

    var source = content.toString()
    var rendered = template(source)(options)
    return callback(null, rendered)
  })
}
module.exports = templateEngine
