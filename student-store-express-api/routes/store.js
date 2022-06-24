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

router.get('/Filter', async (req, res) => {
    res.status(200).json(Store.pullData())

})

router.post('/store', async (req, res) => {
    let user = req.body.user
    let shoppingCart = req.body.shoppingCart

    await Store.makePurchase(user, shoppingCart)
})

module.exports = router