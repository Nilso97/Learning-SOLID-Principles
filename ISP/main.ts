import { IndividualCustomer } from "./class/customer";
import { FiftyPercentDiscount } from "./class/discount";
import { Order } from "./class/order";
import { Product } from "./class/product";
import { ShoppingCart } from "./class/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

const fiftyPercentDiscount = new FiftyPercentDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);

const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  "John",
  "Doe",
  "111-111-111-11"
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer
);

shoppingCart.addItem(new Product("shirt", 9.99));
shoppingCart.addItem(new Product("pencil", 1.5));

shoppingCart.addItem({ name: "dress", price: 31.0 });

console.log(shoppingCart.items);
console.log(
  `Total c/ desconto: ${shoppingCart.totalWithDiscount().toFixed(2)}`
);
order.checkout();
console.log(order.orderStatus);
