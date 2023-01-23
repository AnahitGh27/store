class Product {
    #name;
    #price;
    #description;
    constructor(name, price, des) {
        this.setName = name;
        this.setPrice = price;
        this.addDescription = des;
    }


    setName(name) {
        this.#name = name;
    }

    setPrice(price) {
        if (price > 0) {
            this.#price = price;
        } else {
            throw "error: price must be >= 0";
        }
    }

    getPrice() {
        return this.#price;
    }

    addDescription(des) {
        this.#description = des;
    }
}

module.exports = Product;