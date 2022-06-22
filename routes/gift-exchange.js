const express = require("express")
const router = express.Router()
var GiftExchange = require("../models/gift-exchange")
var BadRequestError = require("../utils/errors")
var NotFoundError = require("../utils/errors")



router.get("/", async (req, res, next) => {
    res.status(200).json({nothing : "here"})
})

router.post("/pairs", (req, res, next) => {
    
    let ourArray = req.body.names;
    let ourNewArray = GiftExchange.pairs(ourArray)
    ourNewArray.forEach(item => console.log(item))
    
    

    let ourObj = { "result" : ourNewArray}
    
    res.status(200).send(ourNewArray)
    res.status(200).json(ourObj)
    
})

router.post("/traditional", (req, res, next) => {
    let ourArray = req.body.names;
    let ourNewArray = GiftExchange.traditional(ourArray)

    let ourObj = { "result" : ourNewArray}

    res.status(200).send(ourNewArray)
    res.status(200).json(ourObj)
})
module.exports = router


