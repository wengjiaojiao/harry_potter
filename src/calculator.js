var _ = require('lodash');

function Calculator() {
    this.subtotal = 0;
}

Calculator.prototype.priceCalculator = function(basket, discount, book) {
    var that = this;

    basket.forEach(function(val, i) {
        that.subtotal += discount.discountRule(basket, book)[i] * val.length;
    });

}

module.exports = Calculator;
