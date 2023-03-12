const express = require('express')
const router = express.Router()
const passport = require('../utils/passportStrategies')

require('dotenv').config()

router.get(
    '/google-auth',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
    '/google-auth/cb',
    passport.authenticate('google', { failureRedirect: '/' }),
    async (req, res) => {
        req.session.user = req.user
        req.session.save(()=>{
            console.log(`req.session.user: ${req.session.user}`)
            res.redirect('/')
        })
    }
)

module.exports = router
