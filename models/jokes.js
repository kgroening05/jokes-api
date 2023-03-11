const mongoose = require('mongoose');

const Jokes = new mongoose.Schema({
    'question' : { type: String, required: true, },
    'answer' : { type: String, },
    'author' : { type: String, default: 'Anonymous', },
})

module.exports = mongoose.model('Jokes', Jokes)