import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("shirt", 9.99));
shoppingCart.addItem(new Product("pencil", 1.5));

shoppingCart.addItem({ name: "dress", price: 31.0 });

console.log(shoppingCart.items);
console.log(shoppingCart.total);

order.checkout();

console.log(order.orderStatus);
