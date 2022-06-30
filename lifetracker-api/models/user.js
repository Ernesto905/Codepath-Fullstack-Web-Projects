const db = require("../db")
const bcrypt = require("bcrypt") //please work!
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
require("dotenv").config()

const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR;


//TODO: VALIDATE FIELDS IMPORT AND CREATION OF CLASS IN UTILS 


class User {
    static async login(){
        console.log('i work')
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

        //TODO make sure no user exists in the system with the email in question


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

    static async fetchUserByEmail(){
        console.log('i work')
    }
}
module.exports = User