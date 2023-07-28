const express = require("express")
const router = express.Router()
const Nutrition = require("../models/nutrition")
const Activity = require("../models/activity")

//JWT imports
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")

//get all of a user's owned nutrition activity
router.get("/", security.requireAuthenticatedUser, permissions.authedUserOwnsNutritionList, async (req, res, next) => {
    console.log("i am here")
    try{
        const { user } = res.locals

        const dailyCalories = await Activity.calculateDailyCaloriesSummaryStats(user)

        return res.status(201).json({dailyCalories})
    } catch (err) {
        console.log("Error is:", err)
        next(err)
    }
})

module.exports = router