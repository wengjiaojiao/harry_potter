function Promotion(){
}

Promotion.prototype.differentPromotion = function(basket) {
    var bookDiscount = [0.95,0.9,0.8,0.75];
    var bookCount = [2,3,4,5];
    var bookPrice = 8;
    var total = 0;

    basket.forEach(function(val, i) {
        var isOne = true;

        bookCount.forEach(function(count,j) {
            if(val.length === count) {
                total += bookPrice * count * bookDiscount[j];
                isOne = false;
            }
        });
        if (isOne) {
            total += bookPrice;
        }
    });
    return total;
}

module.exports = Promotion;
