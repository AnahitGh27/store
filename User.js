const ShoppingCart = require('./ShoppingCart.js');

class User {
    #id;
    #email;
    shoppingCart;
    #wallet;
    constructor(idNumber, email) {
        this.shoppingCart = new ShoppingCart();
        this.setId = idNumber;
        this.setEmail = email;
        this.#wallet = 10000; //just initial value
    }

    setId(idNumber) {
        this.#id = idNumber;
    }

    setEmail(email) {
        this.#email = email;
    }

    buyAll() {
        if (this.#wallet > this.shoppingCart.getTotalPrice() && this.shoppingCart.getProductSize() > 0) {
            this.shoppingCart.clearShoppingCart();
            return "purchase is done successfully";
        } else {
            return "purchase is failed";
        }
    }
}
 module.exports = User;