"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(discount) {
        this.discount = discount;
        this._items = [];
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
    get total() {
        return +this._items.reduce((total, next) => {
            return total + next.price;
        }, 0).toFixed(2);
    }
    totalWithDiscount() {
        const result = this.discount.calculate(this.total);
        if (typeof result === "number")
            return result;
        return this.total;
    }
    clear() {
        console.log("shopping cart was cleaned...");
        this._items.length = 0;
    }
    isEmpty() {
        return this._items.length === 0;
    }
}
exports.ShoppingCart = ShoppingCart;
