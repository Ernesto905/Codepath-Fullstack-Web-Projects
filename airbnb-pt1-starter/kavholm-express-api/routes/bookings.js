const express = require("express")
const Booking = require("../models/booking")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")
const router = express.Router()
require("colors")

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // list all bookings created by authenticated user
    const { user } = res.locals
    const bookings = await Booking.listBookingsFromUser(user)
    return res.status(200).json({ bookings })
  } catch (err) {
    next(err)
  }
})

router.get("/listings", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // list all bookings created for any user-owned listings
    const { user } = res.locals
    const bookings = await Booking.listBookingsForUserListings(user)
    return res.status(200).json({ bookings })
  } catch (err) {
    next(err)
  }
})

router.get(
  "/listings/:listingId/",
  security.requireAuthenticatedUser,
  permissions.authedUserIsListingOwner,
  async (req, res, next) => {
    try {
      // list all bookings for a single listing
      const { listing } = res.locals
      const bookings = await Booking.listBookingsForListing(listing.id)
      return res.status(200).json({ bookings })
    } catch (err) {
      next(err)
    }
  }
)

//WORKING ON THIS ONE!!!
router.post("/listings/:listingId/", 
  security.requireAuthenticatedUser,
  permissions.authedUserIsNotListingOwner,
  async (req, res, next) => {
    try {
      
      const { user, listing } = res.locals
      const ourListing = listing;
      
      const { newBooking } = req.body  

      console.log('here'.blue, user, listing, newBooking)

      const booking = await Booking.createBooking( {user, ourListing, newBooking} )

      return res.status(201).json({ booking })
    } catch (err) {
      console.log("error is: ", err)
      next(err)
    }
  }
)

module.exports = router
