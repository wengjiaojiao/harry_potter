'use strict';

var Basket = require('../src/basket.js');

describe('Basket',function() {
    describe('#getMaxCount', function () {
        it('should get the max count in the bookList', function() {
            var basket = new Basket();
            var result = basket.getMaxCount({1:2,2:2,3:1});

            expect(result).toBe(2);
        });
    });

    describe('#group',function() {
        it("should group the different books", function() {
            var basket = new Basket();

            basket.getMaxCount({1:2,2:2,3:1});
            basket.group({1:2,2:2,3:1});
            expect(basket.basket).toEqual([[1,2,3],[1,2]]);
        });
    });

});
