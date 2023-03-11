const Jokes = require('../models/jokes')

exports.getJoke = async (req, res, next) => {
    console.log('getting jokes')
    const count = await Jokes.estimatedDocumentCount().exec()
    const randomJoke = Math.floor(Math.random() * count)
    const result = await Jokes
        .findOne()
        .skip(randomJoke)
        .exec()
    console.log(result)
    res.locals.joke = result
    next()
}

exports.saveJoke = async (req, res, next) => {
    console.log('saving new joke')
    Jokes.create({
        question : req.body.question,
        answer : req.body.answer,
        author : req.body.author,
    })
    next()
}