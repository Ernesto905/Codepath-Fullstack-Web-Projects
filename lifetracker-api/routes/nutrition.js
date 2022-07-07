const express = require("express")
const router = express.Router()
const Nutrition = require("../models/nutrition")

//JWT imports
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")



//get all of a user's owned nutritions
router.get("/", security.requireAuthenticatedUser, permissions.authedUserOwnsNutritionList, async (req, res, next) => {
    try{
        const { user } = res.locals
        const nutrition = await Nutrition.listNutritionForUser(user)
        return res.status(201).json({nutrition})
    } catch (err) {
        next(err)
    }
})

//Create a nutritional list for a user
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals

        const nutritionalFacts = await Nutrition.createNutrition({user, nutrition : req.body})

        return res.status(201).json({nutritionalFacts})
    } catch (err) {
        console.log("error", err)
        next(err)
    }
})


//get individual nutritions by their id
//TO BE IMPLEMENTED 


module.exports = router