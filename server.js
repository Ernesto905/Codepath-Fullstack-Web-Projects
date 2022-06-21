//requires
const morgan = require("morgan") // this
const app = require("./app") //this
const ourRouter = require("./routes/gift-exchange")

app.use(morgan('tiny')) //this
app.use("/gift-exchange", ourRouter ) // this but with express.json inside




const port = process.env.PORT || 3000

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: 'pong'})
})

//this
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})
