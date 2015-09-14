var _ = require('lodash');

function Basket(){
    this.basket = [];
}

Basket.prototype.getMaxCount = function(bookList) {
    var max;

    max = _.max(bookList, function (book) {
        return book;
    });
    return max;
};

Basket.prototype.group = function(bookList) {
    var that = this;
    var maxCount = this.getMaxCount(bookList);

    while(maxCount != 0){
        var subArray = [];

        for (var k in bookList) {
            if(bookList[k] !=0) {
                subArray.push (Number(k));
                bookList[k]--;
            }
        }
        maxCount --;
        that.basket.push(subArray);
    }
};

module.exports = Basket;
