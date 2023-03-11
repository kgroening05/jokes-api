const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const indexRouter = require('./routes/index')

require('./utils/dbConnect').connectDb()
require('dotenv').config()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter)

const server = http.createServer(app)
server.listen(app.get('port'))

module.exports = app
