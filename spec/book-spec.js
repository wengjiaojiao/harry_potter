'use stric'

var Book = require('../src/book.js');

describe('Book', function() {
    it('should hava filed chapter and count', function() {
        var book = new Book(1);

        expect(book.chapter).toBe(1);
    });
});
