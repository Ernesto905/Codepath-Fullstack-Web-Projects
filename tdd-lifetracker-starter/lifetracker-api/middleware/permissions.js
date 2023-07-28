const { BadRequestError, ForbiddenError } = require("../utils/errors")
const Nutrition = require("../models/nutrition")

/*
Checks to make sure that the authenticated user owns a nutrition item. 
If they arent, thows a forbidden error. 
Otherwise, attaches the nutrition to res.locals
*/

const authedUserOwnsNutrition = async (req, res, next) => {
    try{
        const { user } = res.locals
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)

        if (nutrition.userEmail != user.email){
            throw new ForbiddenError("User is not allowed to access another user's nutrition")
        }

        res.locals.nutrition = nutrition
        return next()
    } catch (err) {
        return next(err)
    }
}

/*
Checks to make sure that the authenticated user owns a nutrition list. 
If they arent, thows a forbidden error. 
Otherwise, attaches the nutrition to res.locals
*/

const authedUserOwnsNutritionList = async (req, res, next) => {
    try {
        const { user } = res.locals
        const nutrition = await Nutrition.listNutritionForUser(user)

        if(nutrition[0].userEmail != user.email) {
            throw new ForbiddenError("user is not allowed to access another user's nutrition list")
        }

        res.locals.nutritionList = nutrition

        return next()
    } catch (err) {
        return next(err)
    }
}


module.exports = {
    authedUserOwnsNutrition,
    authedUserOwnsNutritionList,
}