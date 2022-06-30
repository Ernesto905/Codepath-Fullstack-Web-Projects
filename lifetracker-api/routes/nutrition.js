const express = require("express")
// const User = require("../models/user")
const Nutrition = require("../models/nutrition")
const router = express.Router()

router.post("/", async function(req, res, next) {
    try {
        const nutritionalFacts = await Nutrition.createNutrition(req.body)
        return res.status(201).json({nutritionalFacts})
    } catch (err) {
        next(err)
    }
})

module.exports = router