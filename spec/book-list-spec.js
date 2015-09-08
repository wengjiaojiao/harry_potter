'use strict';

var BookList = require('../src/book-list.js');

describe('Book',function() {
    it("should have field chapter and price", function() {
        var bookList = new BookList(1);

        expect(bookList.chapter).toBe(1);
        expect(bookList.price).toBe(8);
    });
});