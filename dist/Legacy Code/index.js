"use strict";
class ShoppingCartLegacy {
    constructor() {
        this._items = [];
        this._orderStatus = "open";
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(index) {
        this._items.splice(index, 1);
    }
    get items() {
        return this._items;
    }
    get orderByStatus() {
        return this._orderStatus;
    }
    get total() {
        return +this._items
            .reduce((total, nextItem) => {
            return total + nextItem.price;
        }, 0)
            .toFixed(2);
    }
    checkout() {
        if (this.isEmpty()) {
            console.log("your shopping cart is empty!");
            return;
        }
        this._orderStatus = "closed";
        this.sendMessage(`your order totaling ${this.total} has been received!`);
        this.saveOrder();
        this.clear();
    }
    sendMessage(msg) {
        console.log("message sent:", msg);
    }
    saveOrder() {
        console.log("order saved successfully...");
    }
    clear() {
        console.log("shopping cart was cleaned...");
        this._items.length = 0;
    }
    isEmpty() {
        return this._items.length === 0;
    }
}
// Client code
const cart = new ShoppingCartLegacy();
cart.addItem({ name: "shirt", price: 9.99 });
cart.addItem({ name: "pencil", price: 1.5 });
console.log(cart.items);
console.log(cart.total);
console.log(cart.orderByStatus);
cart.checkout();
