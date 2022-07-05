const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        //calls the listProducts method of the Store model and returns the results as the products key of an object.
        const products = Store.listProducts(req.body);
        console.log("hello")
        return res.status(200).json(products)
    } catch (err) {
      console.log("goodbye")
      next(err)
    }
  })
  
  

module.exports = router
