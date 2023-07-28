const { BadRequestError, NotFoundError } = require("../utils/errors")
const db = require("../db")



class Nutrition {

    static async createNutrition({nutrition, user}) {

        console.log("user: ", user)
        //ensure no value is missing in user entry
        const requiredFields = ["name", "category", "calories", "quantity", "img_url"]

        requiredFields.forEach(field => {
            if(!nutrition.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //create a new nutrition input in the database
        const result = await db.query(`INSERT INTO nutrition (
            name,
            category,
            calories,
            img_url,
            quantity,
            user_id
        )
        VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
        RETURNING id, name, category, calories, img_url, user_id, created_at;
        `, [nutrition.name, nutrition.category, nutrition.calories, nutrition.img_url, nutrition.quantity, user.email])

        //return the nutritional facts
        const createdNutrion = result.rows[0]

        return createdNutrion;

    }

    static async fetchNutritionById(id){
        //check id is provided
        if(!id){
            throw new BadRequestError("No id is provided")
        }

        //fetch nutrition from our database
        const result = await db.query(`
            SELECT  n.id,
                    n.name,
                    n.calories,
                    n.img_url AS "imageUrl",
                    n.user_id AS "userId",
                    to_char(n.created_at, 'DD/MM/YYYY') AS "createdAt",
                    n.quantity,
                    u.email AS "userEmail"

            FROM nutrition As n
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1
            `, [id])

        const nutrition = result.rows[0]

        //ensure we have a nutrition
        if(!nutrition){
            throw new NotFoundError
        }
        return nutrition
    }

    static async listNutritionForUser(user) {
        //ensure user is provided
        if(!user){
            throw new BadRequestError("No user provided")
        }

        const result = await db.query(`
            SELECT  n.id,
                    n.name,
                    n.calories,
                    n.category,
                    n.img_url AS "imageUrl",
                    n.user_id AS "userId",
                    to_char(n.created_at, 'DD/MM/YYYY') AS "createdAt",
                    n.quantity,
                    u.email AS "userEmail"
            FROM nutrition AS n
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE u.email = $1
        `, [user.email])
        if (!result) {
            throw new NotFoundError
        }

        
        return result.rows; //return our nutrition
    }
}

module.exports = Nutrition