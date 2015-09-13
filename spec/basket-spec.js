'use strict';

var BookList = require('../src/book-list');
var Basket = require('../src/basket.js');

describe('Basket',function() {
    describe('.group',function() {
        it("should group the different books", function() {
            var bookList = new BookList();

            bookList.addBook(1,2);
            bookList.addBook(2,2);
            bookList.addBook(3,1);
            var basket = new Basket();

            basket.group(bookList.bookList);
            expect(basket.basket).toEqual([1,2,3],[1,2]);
        });
    });

});
