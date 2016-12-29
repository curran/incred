var template = require('lodash.template')
var fs = require('fs')

function templateEngine(filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)

    var source = content.toString()
    var rendered = template(source)(options)
    return callback(null, rendered)
  })
}
module.exports = templateEngine
