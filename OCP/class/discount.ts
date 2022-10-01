export abstract class Discount {

    protected discount = 0;

    calculate(price: number): number {
        return price - price * (this.discount);
    }
}

export class FiftyPercentDiscount extends Discount {

    protected readonly discount: number = 0.5;
}

export class SixtyPercentDiscount extends Discount {

    protected readonly discount: number = 0.6;
}

export class SeventyPercentDiscount extends Discount {

    protected readonly discount: number = 0.7;
}

export class NoDiscount extends Discount { }