const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")

// returns a signed token
const generateToken = (data) => jwt.sign(data, SECRET_KEY, { algorithm : "HS256", expiresIn: "24h"})

// creates a payload with that user's email and admin status
const createUserJwt = (user) => {
    const payload = {
        email: user.email,
        isAdmin: user.isAdmin || false,
    }

    return generateToken(payload)
}

//
const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    } catch (err) {
        return {}
    }
    
} 


module.exports = {
    generateToken,
    createUserJwt,
    validateToken,
}

