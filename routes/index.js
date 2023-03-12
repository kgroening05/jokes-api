const express = require('express')
const router = express.Router()
const Jokes = require('../controllers/jokes')

router.get(
    '/',
    Jokes.getJoke,
    (req, res) => {
        res.render('app', {
            title: 'hello World',
            joke: res.locals.joke,
            user: req.user,
    })
})

router.get(
    '/api',
    Jokes.getJoke,
    (req, res) => {
        res.json(res.locals.joke)
    }
)

router.post(
    '/',
    Jokes.saveJoke,
    (req, res) => {
        res.redirect('/')
    }
)

router.post(
    '/api',
    Jokes.saveJoke,
    (req, res) => {
        res.json({"message":"joke saved"})
    }
)

module.exports = router
