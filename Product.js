class Product {
    #name;
    #price;
    #description;
    constructor(name, price, des) {
        this.setName(name);
        this.setPrice(price);
        this.addDescription(des);
    }


    setName(name) {
        this.#name = name;
    }

    setPrice(price) {
        if (price > 0) {
            this.#price = price;
        } else {
            throw "error: enter positive number";
        }
    }

    getPrice() {
        return this.#price;
    }

    addDescription(des) {
        this.#description = des;
    }
}

export { Product };
