// Day 4: Loops
export const day4_learning = () => {
    // Tasks/Activities:

    // Activity 1: For Loop

    // Task 1: Write a program to print numbers from 1 to 10 using a for loop.
    console.log("\n\nTask 1: Printing numbers from 1 to 10 using a for loop\n\n");
    print_numbers(10);

    // Task 2: Write a program to print the multiplication table of 5 using a for loop.
    console.log("\n\nTask 2: Printing the multiplication table of 5 using a for loop\n\n");
    multiplication_table(5);
    
    // Activity 2: While Loop

    // Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
    console.log("\n\nTask 3: Calculating the sum of numbers from 1 to 10 using a while loop\n\n");
    natural_sum(10);

    // Task 4: Write a program to print numbers from 10 to 1 using a while loop.
    console.log("\n\nTask 4: Printing numbers from 10 to 1 using a while loop\n\n");
    print_reverse(10);

    // Activity 3: Do... While Loop

    // Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
    console.log("\n\nTask 5: Printing numbers from 1 to 5 using a do...while loop\n\n");
    print_use_do_while(5);

    // Task 6: Write a program to calculate the factorial of a number using a do...while loop.
    console.log("\n\nTask 6: Calculating the factorial of a number using a do...while loop\n\n");
    calc_factorial(9);

    // Activity 4: Nested Loops

    // Task 7: Write a program to print a pattern using nested for loops:
    /*
        *
        * *
        * * *
        * * * *
        * * * * *
    */
    console.log("\n\nTask 7: Printing a pattern using nested for loops\n\n");
    pattern_print(5);

    // Activity 5: Loop Control Statements

    // Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
    console.log("\n\nTask 8: Printing numbers from 1 to 10, but skipping the number 5 using the continue statement\n\n");
    skip_number_fn(10, 5);

    // Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
    console.log("\n\nTask 9: Printing numbers from 1 to 10, but stopping the loop when the number is 7 using the break statement\n\n");
    break_number_fn(10, 7);

    
}

const print_numbers = (number) => {
    for(let i=1; i <= number; i++){
        console.log(`number: ${i}`);
    }
}

const multiplication_table = (number) => {
    for(let i=1; i <= 10; i++){
        console.log(`${number} * ${i} = ${number*i}`);
    }
}

const natural_sum = (number) => {
    let i=1;
    let res = 0;
    while(i <= number){
        res += i;
        i+= 1;
    }
    console.log(`Sum of number from 1 to ${number} is : ${res}`);
}

const print_reverse = (number) => {
    while(number >= 1){
        console.log(`number: ${number}`);
        number -= 1;
    }
} 

const print_use_do_while = (number) => {
    let i=1;
    do{
        console.log(`number: ${i}`);
        i++;
    }
    while(i <= number)
}

const calc_factorial = (number) => {
    let inp = number;
    let res = 1;
    do{
        res *= number
        number -= 1
    }
    while(number > 0)

    console.log(`factorial of number: ${inp} is ${res}`);
}

const pattern_print = (number) => {
    for(let i=1; i <= number; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write('* ');
        }
        process.stdout.write('\n');
    }
}

const skip_number_fn = (number, skip_num) => {
    for(let i=1; i <= number; i++){
        if (i == skip_num) continue;
        console.log(`number: ${i}`);
    }
}

const break_number_fn = (number, break_number) => {
    for(let i=1; i <= number; i++){
        if (i == break_number) break_number;
        console.log(`number: ${i}`);
    }
}