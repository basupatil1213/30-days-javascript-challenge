import { construct_log } from "./index.js"

// Day 7: Objects
export const day7_learning = () => {
 
    // Tasks/Activities:

    // Activity 1: Object Creation and Access

    // Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

    construct_log('Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.');

    let book = {
        title: 'Learn JavaScript in 30 Days',
        author: 'chaicode',
        year: 2024
    }

    console.log(`book: ${JSON.stringify(book)}`);

    // Task 2: Access and log the title and author properties of the book object.

    construct_log('Task 2: Access and log the title and author properties of the book object.');

    let title = book.title;

    console.log(` Title of book: ${title}`);

    let author = book.author;

    console.log(`Author of book: ${author}`);

    // Activity 2: Object Methods

    // Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

    construct_log('Task 3: Add a method to the book object that returns a string with the book\'s title and author, and log the result of calling this method.');

    book.get_details = function(){
        return `Title: ${this.title}, Author: ${this.author}`
    }

    let book_details = book.get_details();

    console.log(`book details: ${book_details}`);

    // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

    construct_log('Task 4: Add a method to the book object that takes a parameter (year) and updates the book\'s year property, then log the updated object.');
     
    book.update_book_year = function(year) {
        this.year = year;
    }

    book.update_book_year(2023);

    console.log(`updated object: ${JSON.stringify(book)}`);

    // Activity 3: Nested Objects

    // Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

    construct_log('Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.');

    let library = {
        name: 'Gyan Bandar',
        books: [
            book,
            {
                title: 'Mastering React',
                author: 'John Doe',
                year: 2022
            },
            {
                title: 'Python Programming Essentials',
                author: 'Jane Smith',
                year: 2023
            },
            {
                title: 'Advanced Algorithms',
                author: 'Albert Johnson',
                year: 2021
            }
        ]
    }

    console.log(`library object: ${JSON.stringify(library)}`);

    // Task 6: Access and log the name of the library and the titles of all the books in the library.

    construct_log('Task 6: Access and log the name of the library and the titles of all the books in the library.');

    let library_name = library.name;

    console.log(`Library name: ${library_name}`);

    let books_title = library.books.map(b => ' ' + b.title);
   

    console.log(`Title of all books: ${books_title}`);

    // Activity 4: The this Keyword

    // Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

    construct_log('Task 7: Add a method to the book object that uses the this keyword to return a string with the book\'s title and year, and log the result of calling this method.');

    book.get_title_year = function(){
        return `Title: ${this.title}, Year: ${this.year}`
    }

    console.log(`Result: ${book.get_title_year()}`);

    // Activity 5: Object Iteration

    // Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

    construct_log('Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.');

    for(let item in book){
        console.log(`current item: ${item}, value: ${book[item]}`);
    }

    // Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.

    construct_log('Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.');

    let keys = Object.keys(book);

    console.log(`Keys: ${keys}`);

    let values = Object.values(book);

    console.log(`Values: ${values}`);


}