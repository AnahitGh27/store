import { Product } from "./Product.js";

class ShoppingCart {
    #products;
    #totalPrice;
    #mapId;

    constructor() {
        this.#products = new Map();
        this.#totalPrice = 0;
        this.#mapId = 0;
    }

    addProduct(name, price, des) {
        this.#products.set(this.#mapId++, new Product(name, price, des));
    }
    
    removeProduct(Id) {
        if (this.#products.has(Id)) {
            this.#products.delete(Id);
        } else {
            return "no such product";
        }
    }

    getTotalPrice() {
        for (let value of this.#products.values()) {
            this.#totalPrice += value.getPrice();
        }
        return this.#totalPrice;
    }

    getProductSize() {
        return this.#products.size;
    }
    
    clearShoppingCart() {
        this.#products.clear();
    }
}


export  { ShoppingCart };
