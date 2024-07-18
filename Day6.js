import { construct_log } from "./index.js";

// Day 6: Arrays
export const day6_learning = () => {
    // Tasks/Activities:

    // Activity 1: Array Creation and Access

    // Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

    let numebers_array = [1, 2, 3, 4, 5];

    construct_log(
        "Task 1: Create an array of numbers from 1 to 5 and log the array to the console."
    );

    console.log(`numbers array: ${numebers_array}`);

    // Task 2: Access the first and last elements of the array and log them to the console.

    construct_log(
        "Task 2: Access the first and last elements of the array and log them to the console."
    );

    let first_element = numebers_array[0];
    console.log(`first element: ${first_element}`);

    let last_element = numebers_array[numebers_array.length - 1];
    console.log(`last element: ${last_element}`);

    // Activity 2: Array Methods (Basic)

    // Task 3: Use the push method to add a new number to the end of the array and log the updated array.

    construct_log(
        "Task 3: Use the push method to add a new number to the end of the array and log the updated array."
    );
    numebers_array.push(6);
    console.log(`updated array: ${numebers_array}`);

    // Task 4: Use the pop method to remove the last element from the array and log the updated array.

    construct_log(
        "Task 4: Use the pop method to remove the last element from the array and log the updated array."
    );

    let poped_number = numebers_array.pop();

    console.log(`removed element: ${poped_number}`);

    console.log(`updated array: ${numebers_array}`);

    // Task 5: Use the shift method to remove the first element from the array and log the updated array.

    construct_log(
        "Task 5: Use the shift method to remove the first element from the array and log the updated array."
    );

    let shifted_element = numebers_array.shift();

    console.log(`shifted element: ${shifted_element}`);

    console.log(`updated array: ${numebers_array}`);

    // Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

    construct_log(
        "Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array."
    );

    let new_length = numebers_array.unshift(143);

    console.log(`new length of array: ${new_length}`);

    console.log(`updated array: ${numebers_array}`);

    // Activity 3: Array Methods (Intermediate)

    // Task 7: Use the map method to create a new array where each number is doubled and log the new array.

    construct_log(
        "Task 7: Use the map method to create a new array where each number is doubled and log the new array."
    );

    let new_array = numebers_array.map((number, index) => {
        return number * 2;
    });

    console.log(`new array with value doubled: ${new_array}`);

    // Task 8: Use the filter method to create a new array with only even numbers and log the new array.

    construct_log(
        "Task 8: Use the filter method to create a new array with only even numbers and log the new array."
    );

    let even_num_array = numebers_array.filter((num, index) => num % 2 === 0);

    console.log(`new even number array: ${even_num_array}`);

    // Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

    construct_log(
        "Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result."
    );

    let sum = numebers_array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    console.log(`sum of array elements: ${sum}`);

    // Activity 4: Array Iteration

    // Task 10: Use a for loop to iterate over the array and log each element to the console.

    construct_log(
        "Task 10: Use a for loop to iterate over the array and log each element to the console."
    );

    for (let i = 0; i < numebers_array.length; i++) {
        console.log(`element ${i}: ${numebers_array[i]}`);
    }

    // Task 11: Use the forEach method to iterate over the array and log each element to the console.

    construct_log('Task 11: Use the forEach method to iterate over the array and log each element to the console.');

    numebers_array.forEach((element, index) => {
        console.log(`element ${index}: ${element}`);
    });

    // Activity 5: Multi-dimensional Arrays

    // Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

    construct_log('Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.');

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log('matrix:');
    console.log(matrix);

    // Task 13: Access and log a specific element from the two-dimensional array.

    construct_log('Task 13: Access and log a specific element from the two-dimensional array.');

    let specificElement = matrix[1][2];

    console.log(`Element at row 1, column 2: ${specificElement}`);
};
