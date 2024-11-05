// Object of protos
const bookProtos = {
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    },
    getAge : function() {
        let age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = "Book1"
// book1.author = "Author 1"
// book1.year = "2023"

const book1 = Object.create(bookProtos, {
    title : {value: "Book1"},
    author : {value: "Author 1"},
    year : {value: "2023"}
});

console.log(book1)
console.log(book1.getSummary())