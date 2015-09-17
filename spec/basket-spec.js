'use strict';

var Basket = require('../src/basket.js');

describe('Basket',function() {
    describe('.getMaxCount(bookList)', function () {
        it('should get the max count in the bookList', function() {
            var result = Basket.getMaxCount({1:2,2:2,3:1});

            expect(result).toBe(2);
        });
    });

    describe('#group(bookList)',function() {
        it("should group the different but not special books", function() {
            var basket = new Basket();

            basket.group({1:2,2:2,3:1});
            expect(basket.basket).toEqual([[1,2,3],[1,2]]);
        });
    });

    describe('#group(bookList)',function() {
        it("should group the different and special books", function() {
            var basket = new Basket();

            basket.group({1:3,2:2,3:2,4:1,5:1});
            expect(basket.basket).toEqual([[1,2,3,4],[1,2,3,5],[1]]);
        });
    });
});
