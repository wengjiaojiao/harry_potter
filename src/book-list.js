function BookList() {
    this.bookList = {};
}

BookList.prototype.addBook = function(book) {
    this.bookList[book.chapter] = book.count;
}

module.exports = BookList;
