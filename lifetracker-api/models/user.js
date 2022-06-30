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
        const requiredFields = ["username", "password", "firstName", "lastName"]
    }

    static async fetchUserByEmail(){
        console.log('i work')
    }
}
module.exports = User