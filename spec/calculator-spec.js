'use strict';

var Calculator = require('../src/calculator.js');
var Book = require('../src/book.js');
var Discount = require('../src/discount.js');

describe('Calculator',function() {
    describe('#priceCalculator',function() {
        it('should calculate the price when there have not business',function() {
            var calculator = new Calculator();
            var discount = new Discount();
            var book = new Book();

            calculator.priceCalculator([],discount,book);
            expect(calculator.subtotal).toBe(0);
        });
        it('should calculate the price when it is the normal group',function() {
            var calculator = new Calculator();
            var discount = new Discount();
            var book = new Book();

            calculator.priceCalculator([[1,2,3],[1,2]],discount,book);
            expect(calculator.subtotal).toBe(36.8);
        });

        it('should calculate the price when it is the special group',function() {
            var calculator = new Calculator();
            var discount = new Discount();
            var book = new Book();

            calculator.priceCalculator([[1,2,3,4,5],[1,2,3]],discount,book);
            expect(calculator.subtotal).toBe(51.2);
        });
    });
    describe('#filterSpecial', function() {
        it('should filter the array if it is in the special situation', function() {
            var calculator = new Calculator();
            var result = calculator.filterSpecial([[1,2,3],[1]],3);

            expect(result).toEqual([[1,2,3]]);
        });

        it('should print a null array when it is not in the special situation', function() {
            var calculator = new Calculator();
            var result = calculator.filterSpecial([[1,2,3],[1]],2);

            expect(result).toEqual([]);
        });
    });
});
