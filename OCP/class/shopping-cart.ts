import { Discount } from "./discount";
import { ICartItem } from "./interfaces/cart-item";

export class ShoppingCart {

    private readonly _items: Array<ICartItem> = [];

    constructor(private readonly discount: Discount) { }

    addItem(item: ICartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<ICartItem[]> {
        return this._items;
    }

    get total(): number {
        return +this._items
            .reduce((total, next) => {
                return total + next.price;
            }, 0)
            .toFixed(2);
    }

    totalWithDiscount(): number {
        return this.discount.calculate(this.total);
    }

    clear(): void {
        console.log("shopping cart was cleaned...");
        this._items.length = 0;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }
}
