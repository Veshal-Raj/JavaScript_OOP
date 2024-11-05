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

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Instantiate Object
const mag1 = new Magazine("book 1", "author 1", 2001, "Nov");
console.log(mag1)
console.log(mag1.getSummary())