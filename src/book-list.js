function BookList(){
    this.bookList = {};
}

BookList.prototype.addBook = function (chapter, count){
    this.bookList[chapter] = count;;
}

module.exports = BookList;
