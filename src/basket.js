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
    that.basket = Basket.isSpecial(that.basket);
};

Basket.isSpecial = function(basket) {
    var threeDifferentGroup = 3;
    var fiveDifferentGroup = 5;
    var specialOne = Basket.filterSpecial(basket, threeDifferentGroup);
    var specialTwo = Basket.filterSpecial(basket, fiveDifferentGroup);
    var isSpecial = specialOne.length > 0 && specialTwo.length > 0;
    var specialBasket = [];
    var normal = Basket.filterNormal(basket, threeDifferentGroup, fiveDifferentGroup);

    if(!isSpecial) {
        return basket;
    } else {
        specialBasket = Basket.specialGroup(basket,specialOne,specialTwo);
        specialBasket.push(normal[0]);
        return specialBasket;
    }
}

Basket.specialGroup = function(basket,specialOne,specialTwo) {
    var basket = [];
    var special = _.difference(specialTwo[0],specialOne[0])[0];
    var specialPosition = _.indexOf(specialTwo[0], special);

    specialOne[0].push(special);
    specialTwo[0].splice(specialPosition,1);
    basket.push(specialOne[0]);
    basket.push(specialTwo[0]);
    return basket;
}

Basket.filterSpecial = function(basket, specialLength) {
    var special = _.filter(basket, function(n){
        return n.length === specialLength;
    });

    return special;
}

Basket.filterNormal = function(basket, specialOne, specialTwo) {
    var normal = _.filter(basket, function(n) {
        return n.length !== specialOne && n.length !== specialTwo;
    });

    return normal;
}

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
