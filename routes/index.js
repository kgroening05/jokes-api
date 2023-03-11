const express = require('express')
const router = express.Router()
const Jokes = require('../controllers/jokes')

router.get(
    '/',
    Jokes.getJoke,
    (req, res) => {
        res.render('app', {
            title: 'hello World',
            joke: res.locals.joke
    })
})

router.post(
    '/',
    Jokes.saveJoke,
    (req, res) => {
        res.redirect('/')
    }
)

module.exports = router
