const db = require("../db")

class Order {
    static async listOrdersForUser({ user }) {
        //return all orders that the authenticated user has created
    }
    static async createOrder( {user, order}) {
        // will take a user's order and store it in the database.
    }
}

module.exports = Order