const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async function(req, res, next) {
    try {
        return res.status(200).json(req.body)

    } catch (err) {
        next(err)
    }
})

router.post("/register", async function(req, res, next) {
    try {
        const newUser = await User.register(req.body)
        return res.status(201).json({newUser})
        
    } catch (err) {
        next(err)
    }
})

module.exports = router