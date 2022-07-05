const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Order {
    static async listOrdersForUser(user) {
      console.log("email is ", user.email)
        const result = await db.query(`
          SELECT orders.id AS "orderId",
                 orders.customer_id AS "customerId",
                 od.quantity AS "quantity",
                 products.name AS "name",
                 products.price AS "price"
          FROM orders
            JOIN order_details AS od ON od.order_id = orders.id
            JOIN products ON products.id = od.product_id
          WHERE orders.customer_id = (SELECT id FROM users WHERE email = $1)
        `, [user.email])

        console.log("the results are", result.rows[0])
    
        return result.rows
      }

    static async createOrder( {user, order}) {
        // will take a user's order and store it in the database.

        const result = await db.query(
            `
            INSERT INTO orders (customer_id)
            VALUES ((SELECT id FROM users WHERE email = $1))
            RETURNING   id
            `, [user.email]

        )


        const orderId = result.rows[0].id;
       


        console.log("order", order)
        

        // add product to the order_details table 
        order.forEach((product) => {
            console.log("product id", product.id)
            console.log("product id", product.quantity)

            db.query(
                `
                INSERT INTO order_details (order_id, product_id, quantity)
                VALUES ($1, $2, $3)
                `, [orderId, product.id, product.quantity]

            )
        })


        return result.rows[0]

    }
}

module.exports = Order