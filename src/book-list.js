function BookList() {
    this.bookList = {};
}

BookList.prototype.addBook = function(book,count) {
    this.bookList[book.chapter] = count;
}

module.exports = BookList;
