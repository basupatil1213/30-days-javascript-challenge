import { construct_log } from "./index.js";
// Day 5: Functions
export const day5_learning = () => {

    // Tasks/Activities:

    // Activity 1: Function Declaration

    // Task 1: Write a function to check if a number is even or odd and log the result to the console.
    function even_odd_fn (number) {
        console.log( number%2 == 0 ? 'even' : 'odd');
    }

    construct_log('Task 1: Write a function to check if a number is even or odd and log the result to the console.');
    

    // even number test
    even_odd_fn(2);

    //odd number test
    even_odd_fn(5);

    // Task 2: Write a function to calculate the square of a number and return the result.

    function sqaure_num_fn (number){
        return number ** 2;
    }
    construct_log(`Task 2: Write a function to calculate the square of a number and return the result.`);
    let res = sqaure_num_fn(4);
    console.log(res);

    // Activity 2: Function Expression

    // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

    function max_num_fn(num1, num2) {
        console.log(num1 > num2 ? `${num1} is greater` : num2 > num1 ? `${num2} is greater` : 'Both are equal');
    }

    construct_log('Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.');
    max_num_fn(143,1432);

    // Task 4: Write a function expression to concatenate two strings and return the result.

    // Activity 3: Arrow Functions

    // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

    const sum_two_num_fn = (num1, num2) => num1 + num2;

    construct_log('Task 5: Write an arrow function to calculate the sum of two numbers and return the result.');
    let sum_res = sum_two_num_fn(143,1432);

    console.log(`sum of two numbers is: ${sum_res}`);

    // Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

    const check_char_presence_fn = (str, character) => {
        return str.includes(character);
    }

    construct_log('Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.');

    let presence_res = check_char_presence_fn('Basavaraj Patil', 'P');
    console.log(presence_res ? 'character is present in string' : 'character is not present in string');

    // Activity 4: Function Parameters and Default Values

    // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

    const product_of_two_fn = (num1, num2=1) => {
        return num1*num2;
    }

    construct_log('Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.');

    let product_res = product_of_two_fn(1,2);

    console.log(`Product of two numbers when both are passed: ${product_res}`);

    product_res = product_of_two_fn(4);
    console.log(`Product of two numbers when only one param is passed: ${product_res}`);

    // Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
    const greeting_fn = (name, age=18)=> {
        console.log(`Welcome, ${name}, Your age is ${age}`);
    }

    construct_log('Task 8: Write a function that takes a person\'s name and age and returns a greeting message. Provide a default value for the age.');

    // with passing age
    greeting_fn("Basavaraj Patil", 24);

    //without passing age
    greeting_fn('Shreyas Patil');

    // Activity 5: Higher-Order Functions

    // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
    const higher_order_fn = (fn, number) => {
        let i = number;
        while(i > 0){
            fn();
            i--;
        }
    }

    construct_log('Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.')

    higher_order_fn(() => {
        console.log(` I am being called by higher order function`);
    }, 4);

    // Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
    const apply_fn = (fn1, fn2, value) => {
        const initial_res = fn1(value);
        const final_res = fn2(initial_res);
        return final_res;
    }

    const fn1 = (num) => num*2;
    const fn2 =(num) => num ** 2;

    construct_log('Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.');

    let higher_fn_res = apply_fn(fn1, fn2,4);
    console.log(`result after applying two functions : ${higher_fn_res}`);

}