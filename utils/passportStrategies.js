const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/users')

require('dotenv').config()

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.REDIRECT_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
        const email = profile._json.email;
        const user = await User.findOne({ email: email }).exec();
        if (user) {
            console.log('user exists')
            console.log(user)
            done(null, user)
        } else {
            const newUser = await User.create({
                email: email,
            })
            console.log(newUser)
            done(null, newUser)
        }
    })
)

module.exports = passport
