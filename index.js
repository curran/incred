var express = require('express')
var app = express()
var templateEngine = require('./templateEngine')

app.engine('html', templateEngine)

app.set('views', './views')
app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('index', { foo: 'bar' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
