'use strict';

var BookList = require('../src/book-list.js');

describe('BookList',function() {
    describe('#addBook',function() {
        it("should get the single book list", function() {
            var bookList = new BookList();

            bookList.addBook({chapter:1,price:8},2);
            expect(bookList.bookList).toEqual({1:2});
        });

        it("should get the single book list", function() {
            var bookList = new BookList();

            bookList.addBook({chapter:1,price:8},2);
            bookList.addBook({chapter:2,price:8},2);
            bookList.addBook({chapter:3,price:8},1);
            expect(bookList.bookList).toEqual({1:2,2:2,3:1});
        });
    });

});
