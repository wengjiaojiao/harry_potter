function Promotion(bookPrice) {
    this.bookPrice = bookPrice;
}

Promotion.prototype.differentPromotion = function(basket) {
    var bookDiscount = [0.95, 0.9, 0.8, 0.75];
    var bookCount = [2, 3, 4, 5];
    var total = 0;
    var that = this;

    basket.forEach(function(val, i) {
        var isOne = true;

        bookCount.forEach(function(count, j) {
            if (val.length === count) {
                total += that.bookPrice * count * bookDiscount[j];
                isOne = false;
            }
        });
        if (isOne) {
            total += that.bookPrice;
        }
    });
    return total;
};

module.exports = Promotion;
