const express = require('express')
const Store = require('../models/store')

const router = express.Router();




router.get('/store', (req, res) => {
    res.status(200).json(Store.pullData())
})

router.get('/store/:productId', async (req,res) => {
    let productId = req.params.productId
    
   
    res.status(200).json(await Store.getProductById(productId))
})

module.exports = router