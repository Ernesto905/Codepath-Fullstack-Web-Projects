const { storage } = require("../data/storage")

class Store {
    

    static pullData() {
        const product = storage.get("products")
        return product
    }

    static async getProductById(id) {

        let product = storage.get("products").find({id: Number(id)}).value();

        return product
    }




    

    static async makePurchase(user, shoppingCart) {
        //configure purchase information
        let purchase = []
        const purchasedAt = new Date().toISOString();
        
        shoppingCart.forEach(element => {
            purchase.push(this.getProductById(element.id))
        });
        console.log('purchases is ', purchase)
        
        await storage.get("purchases").push({
            id : 1,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            createdAt : purchasedAt,
            purchase : purchase,
        }).write()

        
    }
}

module.exports = Store