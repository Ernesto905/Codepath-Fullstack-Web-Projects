const { BadRequestError } = require("../utils/errors")
const Listing = require("./listing")
const Booking = require("./booking")
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testListingIds,
} = require("../tests/common")

beforeAll(commonBeforeAll)
beforeEach(commonBeforeEach)
afterEach(commonAfterEach)
afterAll(commonAfterAll)

describe("Booking", () => {
  


  
  describe("Test listBookingsFromUser", () => {
    test("Fetches all of the authenticated users' bookings", async () => {
      const user = { username: "jlo" }
      const listingId = testListingIds[0]
      const listing = await Listing.fetchListingById(listingId)

      const bookings = await Booking.listBookingsFromUser(user)
      expect(bookings.length).toEqual(2)

      const firstBooking = bookings[bookings.length - 1]

      firstBooking.totalCost = Number(firstBooking.totalCost)

      expect(firstBooking).toEqual({
        id: expect.any(Number),
        startDate: new Date("03-05-2021"),
        endDate: new Date("03-07-2021"),
        paymentMethod: "card",
        guests: 1,
        username: "jlo",
        hostUsername: "lebron",
        totalCost: Math.ceil(3 * (Number(listing.price) + Number(listing.price) * 0.1)),
        listingId: listingId,
        userId: expect.any(Number),
        createdAt: expect.any(Date),
      })
    })

    test("Returns empty array when user hasn't booked anything", async () => {
      const user = { username: "lebron" }

      const bookings = await Booking.listBookingsFromUser(user)
      expect(bookings).toHaveLength(0)
    })
  })

  describe("Test listBookingsForUserListings", () => {
    test("Fetches all of the bookings for any listing the user owns", async () => {
      const user = { username: "lebron" }
      const listingId = testListingIds[0]
      const listing = await Listing.fetchListingById(listingId)

      const bookings = await Booking.listBookingsForUserListings(user)
      expect(bookings.length).toEqual(2)

      const firstBooking = bookings[bookings.length - 1]

      firstBooking.totalCost = Number(firstBooking.totalCost)

      expect(firstBooking).toEqual({
        id: expect.any(Number),
        startDate: new Date("03-05-2021"),
        endDate: new Date("03-07-2021"),
        paymentMethod: "card",
        guests: 1,
        username: "jlo",
        hostUsername: "lebron",
        totalCost: Math.ceil(3 * (Number(listing.price) + Number(listing.price) * 0.1)),
        listingId: listingId,
        userId: expect.any(Number),
        createdAt: expect.any(Date),
      })
    })

    test("Returns empty array when users listing have no bookings", async () => {
      const user = { username: "serena" }

      const bookings = await Booking.listBookingsForUserListings(user)
      expect(bookings).toHaveLength(0)
    })
  })

  describe("Test createBooking", () => {
    test("Can create a new booking with valid params", async () => {
      const user = {  username : "jlo" }
      const listingId = testListingIds[0]
      const ourListing = await Listing.fetchListingById(listingId)

      startDate = "07-06-2022"
      endDate = "08-08-2028"
      guests = 1
      newBooking = {startDate, endDate, guests}

      const booking = await Booking.createBooking({ user, ourListing, newBooking })

      booking.totalCost = Number(booking.totalCost)

      //ensure that values are accurate
      expect(booking).toEqual({
        id: expect.any(Number),
        startDate: new Date("07-06-2022"),
        endDate: new Date("08-08-2028"),
        paymentMethod: "card",
        guests: 1,
        listingId: expect.any(Number),
        hostUsername: "lebron",
        totalCost: 58337895,
        username: user.username,
        userId: expect.any(Number),
        createdAt: expect.any(Date)
      })
    })

    test("Throws error with invalid params", async () => {
      expect.assertions(1);

      const user = {  username : "jlo" }
      const listingId = testListingIds[0]
      const ourListing = Listing.fetchListingById(listingId)

      const endDate = "08-08-2028"

      const newBooking = { endDate }

      try {
        const booking = await Booking.createBooking({ newBooking, ourListing, user})
      } catch (err) {
        expect(err instanceof BadRequestError).toBeTruthy(); //???
      }

    })
  })
})
