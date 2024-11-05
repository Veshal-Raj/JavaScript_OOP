class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }

    getAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old.`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revise = true;
    }

    static greeting() {
        return 'Hello, I am a Book object.';
    }
}


const book1 = new Book('book1', 'author1', 2001);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise(2000);
console.log(book1)
// book1.greeting() -> throw error
console.log(Book.greeting());