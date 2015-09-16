var _ = require('lodash');

function Calculator() {
    this.subtotal = 0;
}

Calculator.prototype.priceCalculator = function(basket, discount, book) {
    var that = this;
    var threeDifferentGroup = 3;
    var fiveDifferentGroup = 5;
    var specialOne = this.filterSpecial(basket, threeDifferentGroup);
    var specialTwo = this.filterSpecial(basket, fiveDifferentGroup);
    var isSpecial = specialOne.length > 0 && specialTwo.length > 0;

    if(!isSpecial) {
        that.subtotal = this.normalCalculator(basket, discount, book);
    } else {
        that.subtotal = this.specialCalculator(basket, discount, book);
    }
}

Calculator.prototype.filterSpecial = function(basket, specialLength) {
    var special = _.filter(basket, function(n){
        return n.length === specialLength;
    });

    return special;
}

Calculator.prototype.normalCalculator = function(basket, discount, book) {
    var that = this;
    var subtotal = 0;

    basket.forEach(function(val, i) {
        subtotal += discount.discountRule(basket, book)[i] * val.length;
    });

    return subtotal;
}

Calculator.prototype.specialCalculator = function(basket, discount, book) {
    return this.normalCalculator(basket, discount, book) - 0.4;
}
module.exports = Calculator;
