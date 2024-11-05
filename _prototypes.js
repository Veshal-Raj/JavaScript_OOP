// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary prototype
Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} at ${this.year}`;
}

// getAge prototype
Book.prototype.getAge = function() {
    let age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
}

// Revise / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
}

// Instantiate Object
let book1 = new Book("book1", "author 1", 2001);
let book2 = new Book("book2", "author 2", 2002);

console.log(book1)
console.log(book2.getSummary())
console.log(book1.getAge())
book1.revise(1997);
console.log(book1)

