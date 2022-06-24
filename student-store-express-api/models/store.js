const data = require('../data/db.json')
const { storage } = require("../data/storage")

class Store {

    

    static pullData() {
        const product = storage.get("products")
        return product
    }

    static async getProductById(id) {

        let dog = storage.get("products").find({id: Number(id)}).value();

        console.log(dog)
        return dog
        

       
    }
}

module.exports = Store