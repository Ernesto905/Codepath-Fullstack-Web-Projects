const express = require("express")
const router = express.Router()


const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")

router.post("/login", async function(req, res, next) {
    try {
        // Assign a token to an authenticated user
        const user = await User.login(req.body)
        const token = createUserJwt(user)

        console.log("logged in user is: ", req.body)

        return res.status(200).json({user, token})

    } catch (err) {
        next(err)
    }
})

router.post("/register", async function(req, res, next) {
    try {
        // create a new user and assign them a JWT 
        const user = await User.register(req.body)
        const token = createUserJwt(user)

        return res.status(201).json({user, token})
        
    } catch (err) {
        next(err)
    }
})

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try{
        const {email} = res.locals.user //works
        
        const user = await User.fetchUserByEmail(email) //works

        const publicUser = await User.makePublicUser(user) //works!

        return res.status(200).json({user: publicUser})
    } catch (err) {
        next(err)
    }
})

module.exports = router