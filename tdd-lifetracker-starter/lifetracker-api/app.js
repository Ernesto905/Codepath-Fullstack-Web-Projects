//import required modules
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { NotFoundError } = require("./utils/errors")
const authRoutes = require("./routes/auth")
const nutritionRoutes = require("./routes/nutrition");
const activityRoutes = require("./routes/activity")
const security = require("./middleware/security")

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use(security.extractUserFromJwt) //user auth


//routes
app.use("/nutrition", nutritionRoutes)
app.use("/auth", authRoutes)
app.use("/activity", activityRoutes)

// health check 
app.get("/", function(req, res) {
    return res.status(200).json({ping: "pong"})
})

//Handle 404 errors 
app.use(function (req, res, next) {
    return next(new NotFoundError())
})

//Generic error handling
app.use(function (err, req, res, next) {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status},
    })
})

module.exports = app