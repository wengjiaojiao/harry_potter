'use strict';

var Discount = require('../src/discount.js');
var Book = require('../src/book.js');

describe('Discount',function() {
    describe('#discountRule',function() {
        it("one different book have no discount", function() {
            var discount = new Discount();
            var book = new Book(1);

            expect(discount.discountRule([[1]],book)[0]).toBe(8);
        });

        it("two different book have 5% discount", function() {
            var discount = new Discount();
            var book = new Book(1);

            expect(discount.discountRule([[1,2]], book)[0]).toBe(7.6);
        });


        it("three different book have 10% discount", function() {
            var discount = new Discount();
            var book = new Book(1);

            expect(discount.discountRule([[1,2,3]], book)[0]).toBe(7.2);
        });

        it("four different book have 20% discount", function() {
            var discount = new Discount();
            var book = new Book(1);

            expect(discount.discountRule([[1,2,3,4]], book)[0]).toBe(6.4);
        });

        it("five different book have 25% discount", function() {
            var discount = new Discount();
            var book = new Book(1);

            expect(discount.discountRule([[1,2,3,4,5]], book)[0]).toBe(6);
        });
    });
});
