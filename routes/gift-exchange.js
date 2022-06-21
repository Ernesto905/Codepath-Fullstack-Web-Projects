//import GiftExchange from "../models/gift-exchange"

const express = require("express")
const router = express.Router()
var GiftExchange = require("../models/gift-exchange")


const names = { user_1 : "David",
                user_2 : "Danie",
                user_3 : "Jenny",}

router.get("/", async (req, res, next) => {
    res.status(200).json({nothing : "here"})
})

router.post("/pairs", (req, res, next) => {
    res.status(200).json(names)
})

router.post("/traditional", (req, res, next) => {
    res.status(200).json(names)
})
module.exports = router


let test = new GiftExchange()
test.pairs(['guy', 'dog', 'man bear pig', 'yes'])