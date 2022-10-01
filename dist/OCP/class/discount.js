"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = exports.SeventyPercentDiscount = exports.SixtyPercentDiscount = exports.FiftyPercentDiscount = exports.Discount = void 0;
class Discount {
    constructor() {
        this.discount = 0;
    }
    calculate(price) {
        return price - price * (this.discount);
    }
}
exports.Discount = Discount;
class FiftyPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0.5;
    }
}
exports.FiftyPercentDiscount = FiftyPercentDiscount;
class SixtyPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0.6;
    }
}
exports.SixtyPercentDiscount = SixtyPercentDiscount;
class SeventyPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0.7;
    }
}
exports.SeventyPercentDiscount = SeventyPercentDiscount;
class NoDiscount extends Discount {
}
exports.NoDiscount = NoDiscount;
