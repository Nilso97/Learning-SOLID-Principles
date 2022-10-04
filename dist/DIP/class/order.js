"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(cart, messaging, persistency, customer) {
        this.cart = cart;
        this.messaging = messaging;
        this.persistency = persistency;
        this.customer = customer;
        this._orderStatus = "open";
    }
    get orderStatus() {
        return this._orderStatus;
    }
    checkout() {
        if (this.cart.isEmpty()) {
            console.log("your shopping cart is empty!");
            return;
        }
        this._orderStatus = "closed";
        this.messaging.sendMessage("your order has been received!");
        this.persistency.saveOrder();
        this.cart.clear();
        console.log("The customer is", this.customer.getName());
    }
}
exports.Order = Order;
