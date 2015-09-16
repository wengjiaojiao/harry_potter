function Discount(bookPrice) {
    this.bookPrice = bookPrice;
    this.bookDiscount = [1, 0.95, 0.9, 0.8, 0.75];
    this.bookCount = [1, 2, 3, 4, 5];
}

Discount.prototype.discountRule = function(basket) {
    var that = this;
    var promotionPrice = 0;
    var promotionPrices = [];

    basket.forEach(function(val, i) {
        that.bookCount.forEach(function(count, j) {
            if(val.length === count) {
                promotionPrice = that.bookPrice * that.bookDiscount[j];
            }
        });
        promotionPrices.push(promotionPrice);
    });
    return promotionPrices;
}

module.exports = Discount;
