const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))



const storeRoutes = require('./routes/store')



//store route
app.use(storeRoutes)


app.get("/", async (req, res) => {
    res.status(200).json({ ping: 'pong'})
})

module.exports = app