require("dotenv").config()
require("colors")

const SECRET_KEY = process.env.SECRET_KEY || "SuperSecretKey"
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001


function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_POST || 5432
    const dbName = process.env.DATABASE_NAME || "lifetracker"

    //test constants go here

    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log('Lifetracker Config'.red)
console.log('Port: '.blue, PORT)
console.log('Database:'.blue, getDatabaseUri())
console.log('-------')



module.exports = {
    PORT,
    getDatabaseUri,
    SECRET_KEY,
}