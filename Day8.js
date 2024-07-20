import { construct_log } from "./index.js";

// Day 8: ES6+ Features
export const day8_learning = () => {

    // Tasks/Activities:

    // Activity 1: Template Literals

    // Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

    construct_log("Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.");
    let person = {
        name: "Balagouda Patil",
        age: 50
    };

    let display_str = `My name is ${person.name}, I am ${person.age} year old.`;

    console.log(display_str);

    // Task 2: Create a multi-line string using template literals and log it to the console.

    construct_log("Task 2: Create a multi-line string using template literals and log it to the console.");

    let multiline_str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, optio.       
                         Error in necessitatibus nam odit cupiditate doloribus! Quidem voluptas repellendus magni et similique, aut fugit, error,
                          dignissimos laborum ad animi saepe aperiam harum provident aspernatur unde deserunt sint sit! Reprehenderit nesciunt minus accusamus quisquam hic, eum, maiores repellendus 
                          ratione quibusdam nemo quidem perferendis accusantium dolore officia facere aut tenetur expedita!`;

    console.log("Multiline string: ");

    console.log(multiline_str);

    // Activity 2: Destructuring

    // Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

    construct_log("Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.");

    let [first__num, second_num] = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

    console.log(`first number: ${first__num}, and second number: ${second_num}`);

    // Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

    construct_log("Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.");

    let { title, author } = {
        title: 'Simple life',
        author: 'Lord Shiva'
    }

    console.log(`Book Title: ${title}, and Author: ${author}`);

    // Activity 3: Spread and Rest Operators

    // Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

    construct_log("Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.");

    let existing_array = [1, 2, 4, 3, 5, 6, 7, 5, 22, 23];
    let new_array = [99, 83, 74, ...existing_array];

    console.log(`exisiting array: ${existing_array}, \nnew array: ${new_array}`);

    // Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

    construct_log("Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.");

    const sum_of_nums = sum_values_fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

    console.log(`Sum of arbitary numbers passed: ${sum_of_nums}`);


    // Activity 4: Default Parameters

    // Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

    construct_log("Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.");

    let res_with_default_val = product_of_nums_fn(4);

    console.log(`Product of numbers with default value: ${res_with_default_val}`);

    let res_with_both_val = product_of_nums_fn(4, 6);

    construct_log(`Product of numbers with both value passed: ${res_with_both_val}`);


    // Activity 5: Enhanced Object Literals

    // Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

    construct_log("Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.");

    const name = "Basavaraj";
    const role = "Software Engineer Intern";

    const user = {
        name,
        role,
        greet() {
            return `Hello, my name is ${this.name} and I am a ${this.role}.`;
        },
        updateRole(newRole) {
            this.role = newRole;
            return `Role updated to ${this.role}.`;
        }
    };

    console.log(user);
    console.log(user.greet());
    console.log(user.updateRole("Full Stack Developer"));
    console.log(user.greet());



    // Task 9: Create an object with computed property names based on variables and log the object to the console.

    construct_log("Task 9: Create an object with computed property names based on variables and log the object to the console.");

    const propName1 = "firstName";
    const propName2 = "lastName";

    const person_obj = {
        [propName1]: "Basavaraj",
        [propName2]: "Patil",
        age: 25,
        getFullName() {
            return `${this[propName1]} ${this[propName2]}`;
        }
    };

    console.log(person_obj);
    console.log(person_obj.getFullName());

}


// Task 6 function
const sum_values_fn = (...inputArgs) => {
    let res = 0

    for (let val of inputArgs) {
        res += val;
    }

    return res;
}

//Task  7 function

const product_of_nums_fn = (first_num, second_num = 1) => {
    return first_num * second_num;
}