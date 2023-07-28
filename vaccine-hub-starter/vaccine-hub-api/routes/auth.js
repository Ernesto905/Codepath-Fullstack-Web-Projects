const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.post("/login", async (req, res, next) => {
    try{
        //take user info and attempt to authenitcate
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err){
        next(err)
    }
})

router.post("/register", async(req,res,next) => {
    try {
        //take user email, password, rsvp status and num of guest 
        //create a new user in our database
        const user = await User.register(req.body)
        return res.status(201).json({ user }) 
    } catch(err) {
        
        next(err)
    }
})

module.exports = router