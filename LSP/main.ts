import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./class/discount";
import { Order } from "./class/order";
import { Product } from "./class/product";
import { ShoppingCart } from "./class/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("shirt", 9.99));
shoppingCart.addItem(new Product("pencil", 1.5));

shoppingCart.addItem({ name: "dress", price: 31.0 });

console.log(shoppingCart.items);
console.log(
  `Total s/ desconto: R$${shoppingCart.totalWithDiscount().toFixed(2)}`
);
order.checkout();
console.log(order.orderStatus);
