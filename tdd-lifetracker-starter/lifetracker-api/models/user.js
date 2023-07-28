const db = require("../db")
require("colors")
const bcrypt = require("bcrypt") //please work!
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
require("dotenv").config()

const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR;


//TODO: VALIDATE FIELDS IMPORT AND CREATION OF CLASS IN UTILS 


class User {

    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username
        }
    }


    static async login(credentials){
        //user submits email and password. If any field is missing, throw an error
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //find user inside the database
        const user = await User.fetchUserByEmail(credentials.email)

        if(user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if(isValid) {
                return User.makePublicUser(user)
            }
        }
        //error handling
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials){
        //user will submit a list of credentials, if any of the fields are ommited then an error is thrown
        const requiredFields = ["username", "password", "first_name", "last_name", "email"]
        

        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in reuqest body.`)
            }
        })

        if(credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid Email.")
        }

        //make sure no user exists in the system with the email in question
        const existingEmail = await User.fetchUserByEmail(credentials.email)
        if (existingEmail) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        //hash user's password
        const hashedPassword = await bcrypt.hash(credentials.password, 13)
        //lowercase email
        const lowercasedEmail = credentials.email.toLowerCase()

        //create a new user and insert into the database
        const result = await db.query(`INSERT INTO users (
            email,
            username,
            password,
            first_name,
            last_name
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, email, username, first_name, last_name
        `, [lowercasedEmail, credentials.username, hashedPassword, credentials.first_name, credentials.last_name])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByEmail(email){
        if(!email){
            throw new BadRequestError("no email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        
        return user
    }
}
module.exports = User