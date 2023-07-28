const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const db = require("../db")


class User {
    static async login(credentials) {
        //user should submit email and password and if any are missing throw error
        //
        //user should submit their email, pw if any missing throw error 
        const requiredFields = ["email", "password"]

        //check that the credentials are included in the input 
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })
        //look up user in the db by email if the user is found compare the submitted password 
        const existingUser= await User.fetchUserByEmail(credentials.email)
        //if there is a match return the user
        
        
        //if anything goes wrong, throw an error
    }

    static async register(credentials) {
        //user should submit their email, pw if any missing throw error 
        const requiredFields = ["email", "password", "first_name", "last_name", "location", "date"]

        //check that the credentials are included in the input 
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //ensure email is valid
        const existingUser= await User.fetchUserByEmail(credentials.email)

        if(existingUser){
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        if(credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid email.")
        }
        //lowercase email
        const lowerCasedEmail = credentials.email.toLowerCase();

        //create new user in db and return new user
        const result = await db.query(
            `INSERT INTO users (
                email,
                password,
                first_name,
                last_name,  
                location,
                date
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING email, password, first_name, last_name, location, date;
        `, [lowerCasedEmail, credentials.password, credentials.first_name, credentials.last_name, credentials.location, credentials.date])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByEmail(email){
        if(!email){ 
            throw new BadRequestError("no email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1;`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user


    }
}
module.exports = User