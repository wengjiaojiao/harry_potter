'use strict';

var BookList = require('../src/book-list.js');

describe('BookList',function() {
    it("should have field chapter and price", function() {
        var bookList = new BookList(1,2);

        expect(bookList.chapter).toBe(1);
        expect(bookList.count).toBe(2);
    });
});
