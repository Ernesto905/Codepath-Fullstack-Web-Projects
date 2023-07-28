const { BadRequestError, NotFoundError } = require("../utils/errors")
const db = require("../db")

class Activity {
    static async calculateDailyCaloriesSummaryStats (user) {
        console.log(user)

        // const result = await db.query(`
        //     SELECT  n.calories,
        //             n.category,
        //             to_char(n.created_at, 'DD/MM/YYYY') AS "createdAt"
        //     FROM nutrition AS n 
        //         LEFT JOIN users AS u ON u.id = n.user_id
        //     WHERE u.email = $1
        // `, [user.email])
        // if (!result) {
        //     throw new NotFoundError
        // } 

        const result = await db.query(`
            SELECT  SUM(n.calories) / count(distinct n.created_at) AS "avgCaloriesPerCategory",
                    n.category
            FROM nutrition AS n 
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE u.email = $1
            GROUP BY n.category
        `, [user.email])
        if (!result) {
            throw new NotFoundError
        } 
        return result.rows


    }
    

}

module.exports = Activity