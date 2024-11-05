// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

// Instantiate Object
let book1 = new Book("book1", "author 1", 2001);
let book2 = new Book("book2", "author 2", 2002);

console.log(book1.getSummary())
console.log(book2.getSummary())