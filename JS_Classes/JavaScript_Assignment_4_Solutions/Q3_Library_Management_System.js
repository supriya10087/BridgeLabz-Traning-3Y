// Q3: Library Management System (Classes + Objects)

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }

    displayDetails() {
        const status = this.isIssued ? "Issued" : "Available";
        console.log(`Title: ${this.title} | Author: ${this.author} | ISBN: ${this.ISBN} | Status: ${status}`);
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("Atomic Habits", "James Clear", "ISBN003", true)
];

function displayAvailableBooks() {
    console.log("\\nAvailable Books:");
    books.filter(function (book) {
        return !book.isIssued;
    }).forEach(function (book) {
        book.displayDetails();
    });
}

function issueBookByISBN(searchISBN) {
    const foundBook = books.find(function (book) {
        return book.ISBN.toLowerCase() === searchISBN.trim().toLowerCase();
    });

    if (foundBook) {
        foundBook.issueBook();
    } else {
        console.log("No book found with that ISBN.");
    }
}

displayAvailableBooks();
issueBookByISBN("ISBN001");
displayAvailableBooks();
