const express = require("express")
const router = express.Router()



var GiftExchange = require("../models/gift-exchange")

let ourGiftExchange = new GiftExchange()
//ourGiftExchange.traditional(['guy', 'dog', 'man bear pig', 'yes'])

const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]

const ourPairs = ourGiftExchange.pairs(names)
const ourTraditionalSentences = ourGiftExchange.traditional(names)

const name = { user_1 : "David",
                user_2 : "Danie",
                user_3 : "Jenny",}

router.get("/", async (req, res, next) => {
    res.status(200).json({nothing : "here"})
})

router.post("/pairs", (req, res, next) => {
    
    res.status(200).json("success")
})

router.post("/traditional", (req, res, next) => {
    res.status(200).json(name)
})
module.exports = router


