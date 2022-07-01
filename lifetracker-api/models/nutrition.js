const { BadRequestError } = require("../utils/errors")
const db = require("../db")



class Nutrition {

    static async createNutrition(values) {

        //ensure no value is missing in user entry
        const requiredFields = ["name", "category", "calories", "img_url", "user_id"]

        requiredFields.forEach(field => {
            if(!values.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //create a new nutrition input in the database
        const result = await db.query(`INSERT INTO nutrition (
            name,
            category,
            calories,
            img_url,
            user_id
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, category, calories, img_url, user_id, created_at;
        `, [values.name, values.category, values.calories, values.img_url, values.user_id])

        //return the nutritional facts
        const nutrition = result.rows[0]

        return nutrition;

    }

    static async getNutrition(){
        const result = await db.query(`SELECT * FROM nutrition`);
    }

}

module.exports = Nutrition