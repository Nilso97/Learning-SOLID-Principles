"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
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
        return +this._items
            .reduce((total, nextItem) => {
            return total + nextItem.price;
        }, 0)
            .toFixed(2);
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
