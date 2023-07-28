/** Express app for AirBnb Clone . */
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const config = require("./config")
const security = require("./middleware/security")

//routes
const authRoutes = require("./routes/auth")
const listingRoutes = require("./routes/listings")
const bookingRoutes = require("./routes/bookings")

//error handling
const { NotFoundError } = require("./utils/errors")

const app = express()

// enable cross-origin resource sharing for all origins for all requests
// NOTE: in production, we'll want to restrict this to only the origin
// hosting our frontend.
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info
app.use(morgan("tiny"))
// extract user from jwt token sent in authorization header
// attach credentials to res.locals.user
app.use(security.extractUserFromJwt)

// routes
app.use("/auth", authRoutes)
app.use("/listings", listingRoutes)
app.use("/bookings", bookingRoutes)

// health check
app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (!config.IS_TESTING) console.error(err.stack)
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

module.exports = app
