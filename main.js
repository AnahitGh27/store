const User = require('./User.js');
const Product = require('./Product.js');
const ShoppingCart = require('./ShoppingCart.js');

let user = new User(1, "id1@gmail.com");
user.shoppingCart.addProduct("A Man Called Ove", 45, "Book author: Fredrik Backman");
console.log(user.shoppingCart.getTotalPrice());
console.log(user.shoppingCart.getProductSize());
user.shoppingCart.clearShoppingCart();

