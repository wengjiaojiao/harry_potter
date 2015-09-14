'use strict';

var Calculator = require('../src/calculator.js');
var Promotion = require('../src/promotion.js');

describe('Calculator',function() {
    describe('#priceCalculator',function() {
        it('should calculate the price when there have not business',function() {
            var calculator = new Calculator();
            var promotion = new Promotion(8);

            calculator.priceCalculator([],promotion);
            expect(calculator.subtotal).toBe(0);
        });
        it('should calculate the price when it is the normal group',function() {
            var calculator = new Calculator();
            var promotion = new Promotion(8);

            calculator.priceCalculator([[1,2,3],[1,2]],promotion);
            expect(calculator.subtotal).toBe(36.8);
        });

        it('should calculate the price when it is the special group',function() {
            var calculator = new Calculator();
            var promotion = new Promotion(8);

            calculator.priceCalculator([[1,2,3,4,5],[1,2,3]],promotion);
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
