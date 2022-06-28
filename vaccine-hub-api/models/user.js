const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        //user should submit email and password and if any are missing throw error
        //
        //look up user in the db by email if the user is found compare the submitted password 
        //if there is a match return the user
        
        //if anything goes wrong, throw an error
    }

    static async register(credentials) {
        //user should submit their email, pw if any missing throw error 
    }
}
