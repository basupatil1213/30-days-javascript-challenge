// Day2: Operators
export const day2_learning = () => {
    // Activity 1: Arithmetic Operations

    // Task1: Write a program to add two numbers and log the result to the console.
    const add_res = add_num(2, 3);
    console.log(`Addition Result: ${add_res}`);

    // Task2: Write a program to subtract two numbers and log the result to the console.
    const sub_res = sub_num(3, 2);
    console.log(`Subtraction Result: ${sub_res}`);

    // Task3: Write a program to multiply two numbers and log the result to the console.
    const mul_res = mul_num(3, 2);
    console.log(`Multiplication Result: ${mul_res}`);

    // Task4: Write a program to divide two numbers and log the result to the console.
    const div_res = div_num(3, 2);
    console.log(`Division Result: ${div_res}`);

    // Task5: Write a program to find the remainder when one number is divided by another and log the result to the console.
    const rem_res = rem_num(3, 2);
    console.log(`Remainder Result: ${rem_res}`);

    // Activity 2: Assignment Operators

    // Task 6: Use the += operator to add a number to a variable and log the result to the console.
    let a = 10;
    a += 20;
    console.log(`After += Operation: ${a}`);

    // Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
    let b = 100;
    b -= 30;
    console.log(`After -= Operation: ${b}`);

    // Activity 3: Comparison Operators

    // Task 8: Write a program to compare two numbers using > and < and log the result to the console.
    let x = 20;
    let y = 30;
    console.log(`Is ${x} < ${y}? ${x < y}`);
    console.log(`Is ${x} > ${y}? ${x > y}`);

    // Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
    let num1 = 20;
    let num2 = 20;
    let num3 = 45;
    console.log(`Is ${num1} >= ${num2}? ${num1 >= num2}`);
    console.log(`Is ${num1} >= ${num3}? ${num1 >= num3}`);
    console.log(`Is ${num1} <= ${num2}? ${num1 <= num2}`);
    console.log(`Is ${num2} <= ${num3}? ${num2 <= num3}`);

    // Task 10: Write a program to compare two numbers using == and === and log the result to the console.
    let age = 18;
    let eligibleAge = 24;
    let retireAge = 43;
    console.log(`Is ${age} === ${eligibleAge}? ${age === eligibleAge}`);
    console.log(`Is ${age} == ${retireAge}? ${age == retireAge}`);

    // Activity 4: Logical Operators

    // Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
    if (true && true) {
        console.log(`Both conditions are true: Success`);
    }

    // Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
    if (false || true) {
        console.log(`At least one condition is true: Success`);
    }

    // Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
    if (!false) {
        console.log(`Negation of false is true: Success`);
    }

    // Activity 5: Ternary Operator

    // Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
    let first_num = -10;
    let second_num = 20;
    console.log(`First number is ${first_num > 0 ? "positive" : "negative"}`);
    console.log(`Second number is ${second_num > 0 ? "positive" : "negative"}`);
}

// Functions for arithmetic operations
const add_num = (a, b) => a + b;

const sub_num = (a, b) => a - b;

const mul_num = (a, b) => a * b;

const div_num = (a, b) => {
    try {
        return a / b;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const rem_num = (a, b) => a % b;
