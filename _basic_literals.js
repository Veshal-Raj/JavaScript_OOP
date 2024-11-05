// const s1 = "Hello World";
// console.log(typeof s1); // string

// const s2 = new String("Hello World");
// console.log(typeof s2); // object

// object literal
const book1 = {
    title: "Book 1",
    author: "Author 1",
    year: 2000,
    getSummary: function() {
        return `${this.title} is written by ${this.author} at ${this.year}`;
    }
}

const book2 = {
    title: "Book 2",
    author: "Author 2",
    year: 2001,
    getSummary: function() {
        return `${this.title} is written by ${this.author} at ${this.year}`;
    }
}

console.log(book1.getSummary()); 
console.log(book2.getSummary()); 
console.log(Object.keys(book1)) // gives array of keys
console.log(Object.values(book1)) // gives array of values