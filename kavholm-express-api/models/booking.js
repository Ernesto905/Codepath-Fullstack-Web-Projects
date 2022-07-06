const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Booking {

  static async createBooking( {user, ourListing, newBooking} ) {

    const requiredFields = ["startDate", "endDate"];
    
    requiredFields.forEach((property) => {

      if(!newBooking.hasOwnProperty(property)){
        throw new BadRequestError(`Missing ${property} in request body.`)
      }

    })

    const result = await db.query (
      `
      INSERT INTO bookings (payment_method, 
                            start_date, 
                            end_date, 
                            guests, 
                            total_cost,
                            listing_id,
                            user_id
        )
      VALUES ($1, ($2)::date, ($3)::date, $4, CEIL((($3)::date - ($2)::date + 1) * ($5 * 1.1)), $6, (SELECT id FROM users WHERE username = $7))
      RETURNING id, 
                start_date AS "startDate",
                end_date AS "endDate",
                guests,
                total_cost AS "totalCost",
                user_id AS "userId",
                ( SELECT username
                  FROM users
                  WHERE id = user_id) AS "username",
                (SELECT hostUsers.username
                  FROM users AS hostUsers
                  WHERE hostUsers.id = (
                    SELECT listings.user_id
                    FROM listings
                    WHERE listings.id = listing_id)) AS "hostUsername",
                created_at AS "createdAt",
                payment_method AS "paymentMethod",
                listing_id AS "listingId"
      `, [newBooking.paymentMethod || "card", newBooking.startDate, newBooking.endDate, newBooking.guests || 1, ourListing.price, ourListing.id, user.username]
    )

    return result.rows[0]

  }


  static async fetchBookingById(bookingId) {
    // fetch a single booking by its id
    const results = await db.query(
      `
      SELECT id,
             payment_method AS "paymentMethod",
             start_date AS "startDate",
             end_date AS "endDate",
             guests,
             total_cost AS "totalCost",
             listing_id AS "listingId",
             user_id AS "userId",
             -- subquery to select the username
             -- of the user who is making the booking
             (
               SELECT username
               FROM users
               WHERE id = user_id
             ) AS "username",
             -- nested subquery to select the username
             -- of the host user who owns the listing
             (
               SELECT users.username
               FROM users
               WHERE users.id = (
                 SELECT listings.user_id
                 FROM listings
                 WHERE listings.id = listing_id
               )
             ) AS "hostUsername",
             created_at AS "createdAt"
      FROM bookings
      WHERE id = $1;
      `,
      [bookingId]
    )

    const booking = results.rows[0]

    if (booking) return booking

    throw new NotFoundError("No booking found with that id.")
  }

  static async listBookingsFromUser(user) {
    // list all bookings that the user has created
    const results = await db.query(
      `
      SELECT bookings.id,
            bookings.payment_method AS "paymentMethod",
            bookings.start_date AS "startDate",
            bookings.end_date AS "endDate",
            bookings.guests,
            bookings.total_cost AS "totalCost",
            bookings.listing_id AS "listingId",
            bookings.user_id AS "userId",
            users.username AS "username",
            (
              SELECT hostUsers.username
              FROM users AS hostUsers
              WHERE hostUsers.id = (
                SELECT listings.user_id
                FROM listings
                WHERE listings.id = listing_id
              )
            ) AS "hostUsername",            
            bookings.created_at AS "createdAt"
      FROM bookings
        JOIN users ON users.id = bookings.user_id
      WHERE user_id = (SELECT id FROM users WHERE username = $1)
      ORDER BY bookings.created_at DESC;
      `,
      [user.username]
    )

    return results.rows
  }

  static async listBookingsForUserListings(user) {
    // list all bookings created for any of the listings that a user owns
    const results = await db.query(
      `
      SELECT bookings.id,
             bookings.payment_method AS "paymentMethod",
             bookings.start_date AS "startDate",
             bookings.end_date AS "endDate",
             bookings.guests,
             bookings.total_cost AS "totalCost",
             bookings.listing_id AS "listingId",
             bookings.user_id AS "userId",
             users.username AS "username",
             (
              SELECT hostUsers.username
              FROM users AS hostUsers
              WHERE hostUsers.id = (
                SELECT listings.user_id
                FROM listings
                WHERE listings.id = listing_id
              )
             ) AS "hostUsername",
             bookings.created_at AS "createdAt"
      FROM bookings
        JOIN users ON users.id = bookings.user_id
        JOIN listings ON listings.id = bookings.listing_id
      WHERE listings.user_id = (SELECT id FROM users WHERE username = $1)
      ORDER BY bookings.created_at DESC;
      `,
      [user.username]
    )

    return results.rows
  }
}

module.exports = Booking
