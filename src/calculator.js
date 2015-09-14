var _ = require('lodash');

function Calculator() {
    this.subtotal = 0;
}

Calculator.prototype.priceCalculator = function(basket, promotion) {
    var that = this;
    var specialGroupOne = 3;
    var specialGroupTwo = 5;
    var specialOne = this.filterSpecial(basket, specialGroupOne);
    var specialTwo = this.filterSpecial(basket, specialGroupTwo);
    var isSpecial = specialOne.length > 0 && specialTwo.length > 0;

    that.subtotal = isSpecial ? promotion.specialPromotion(basket)
                              : promotion.promotionPrice(basket);
}

Calculator.prototype.filterSpecial = function(basket, specialLength) {
    var special = _.filter(basket, function(n){
        return n.length === specialLength;
    });

    return special;
}
module.exports = Calculator;
