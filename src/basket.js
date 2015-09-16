var _ = require('lodash');

function Basket() {
    this.basket = [];
}

Basket.getMaxCount = function(bookList) {
    var max;

    max = _.max(bookList, function(book) {
        return book;
    });
    return max;
};

Basket.prototype.group = function(bookList) {
    var that = this;
    var bookListCopy = _.clone(bookList,true);
    var maxCount = Basket.getMaxCount(bookListCopy);

    while (maxCount != 0) {
        var subArray = [];

        subArray = Basket.getSubArray(bookListCopy);
        maxCount--;
        that.basket.push(subArray);
    }
};

Basket.getSubArray = function(bookList) {
    var subArray = [];

    for (var book in bookList) {
        if (bookList[book] != 0) {
            subArray.push(Number(book));
            bookList[book]--;
        }
    }
    return subArray;
}
module.exports = Basket;
