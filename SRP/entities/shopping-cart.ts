import { ICartItem } from "./interfaces/cart-item";

export class ShoppingCart {
    
  private readonly _items: Array<ICartItem> = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items
      .reduce((total, nextItem) => {
        return total + nextItem.price;
      }, 0)
      .toFixed(2);
  }

  clear(): void {
    console.log("shopping cart was cleaned...");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
