const express = require('express')
const http = require('http')
const path = require('path')
const passport = require('passport')
const user = require('./utils/passportSerialize')
const session = require("express-session");
const { store, connectDb } = require('./utils/dbConnect')
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')

connectDb()
require('dotenv').config()
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(session({
    secret: process.env.SESSIONSECRET,
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
}));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(user.serializeUser);
passport.deserializeUser(user.deserializeUser);

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)

const server = http.createServer(app)
server.listen(app.get('port'))

module.exports = app
