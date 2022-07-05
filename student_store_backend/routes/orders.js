const express = require("express")
const Order = require("../models/order")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const orderList = Order.listOrdersForUser(req.body);
    return res.status(200).json(orderList)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const newOrder = Order.createOrder(req.body);
      return res.status(200).json(newOrder);
    } catch (err) {
      next(err)
    }
  })



module.exports = router
