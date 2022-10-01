import { Order } from "../OCP/class/order";
import { FiftyPercentDiscount, SeventyPercentDiscount, SixtyPercentDiscount } from "./class/discount";
import { ShoppingCart } from "./class/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

// Descontos em %
const fiftyPercentDiscount = new FiftyPercentDiscount();
const sixtyPercentDiscount = new SixtyPercentDiscount();
const seventyPercentDiscount = new SeventyPercentDiscount();

const shoppingCart = new ShoppingCart(seventyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem({ name: "dress", price: 31.0 });
shoppingCart.addItem({ name: "leg", price: 25.8 });

console.log(shoppingCart.items);
console.log(
  `Total c/ desconto: R$${shoppingCart.totalWithDiscount().toFixed(2)}`
);
order.checkout();
console.log(order.orderStatus);
