// Day 3: Control Structures
export const day3_learning = () => {
    
    // Activity 1: If-Else Statements
    
    // Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
    console.log("Task 1: Check if a number is positive, negative, or zero");
    // Positive number test
    let number = 100;
    check_is_positive(number);

    // Negative number test
    number = -10;
    check_is_positive(number);

    // Zero number test
    number = 0;
    check_is_positive(number);

    // Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
    console.log("Task 2: Check if a person is eligible to vote");
    // Eligible test
    let age = 99;
    isEligibleToVote(age);

    // Not eligible test
    age = 17;
    isEligibleToVote(age);

    // Activity 2: Nested If-Else Statements

    // Task 3: Write a program to find the largest of three numbers using nested if-else statements.
    console.log("Task 3: Find the largest of three numbers using nested if-else statements");
    let a = 1;
    let b = 4;
    let c = 3;

    largest_of_three_number(a, b, c);

    a = 4;
    b = 1;
    c = 3;

    largest_of_three_number(a, b, c);

    a = 1;
    b = 3;
    c = 4;
    largest_of_three_number(a, b, c);

    // Activity 3: Switch Case

    // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    console.log("Task 4: Determine the day of the week based on a number (1-7)");
    // Positive test
    let day_number = 4;
    day_of_week(day_number);

    // Negative test
    day_number = 13;
    day_of_week(day_number);

    // Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
    console.log("Task 5: Assign a grade based on a score");
    // A grade test
    let score = 99;
    assign_grade(score);

    // F grade test
    score = 39.99;
    assign_grade(score);

    // Activity 4: Conditional (Ternary) Operator

    // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
    console.log("Task 6: Check if a number is even or odd using the ternary operator");
    let check_num = 33;
    even_or_odd(check_num);

    check_num = 44;
    even_or_odd(check_num);

    // Activity 5: Combining Conditions

    // Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
    console.log("Task 7: Check if a year is a leap year using multiple conditions");
    let year = 2000;
    check_leap_year(year);

    year = 1999;
    check_leap_year(year);

    year = 2000;
    check_leap_year(year);



}

const check_is_positive = (number) => {
    if(number > 0){
        console.log(`Positive number`);
    }
    else if(number < 0){
        console.log(`Negative number`);
    }
    else{
        console.log(`Number is Zero`);
    }
}

const isEligibleToVote = (age) => {
    if(age >= 18){
        console.log(`Congrats, You are eligible to vote`);
    }
    else{
        console.log(`Sorry, You are not eligible to vote`);
    }
}

const largest_of_three_number = (a,b,c) => {
    if (a > b) {
        if (a > c) {
            console.log(`${a} is the greatest number`);
        } else {
            console.log(`${c} is the greatest number`);
        }
    } else {
        if (b > c) {
            console.log(`${b} is the greatest number`);
        } else {
            console.log(`${c} is the greatest number`);
        }
    }
    
}

const day_of_week = (number) => {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid number. Please enter a number between 1 and 7.");
    }
}

const assign_grade = (score) => {
    switch(score){
        case 90 > score <= 100 : console.log(`Grade: A`);
        case 80 > score <= 90 : console.log(`Grade: B`);
        case 70 > score <= 80 : console.log(`Grade: C`);
        case 60 > score <= 70 : console.log(`Grade: D`);
        case 40 >= score <= 60 : console.log(`Grade: E`);
        case score < 40 : console.log(`Grade: F`);
        default : console.log(`Invalid Score, Please enter valid score to get the grade`);
    }
}

const even_or_odd = (number) => number % 2 == 0 ? console.log(`Number is even`): console.log(`Number is odd`);

const check_leap_year = (year) => {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log(`Leap year`);
            }
            else{
                console.log(`Non leap year`);
            }
        }else{
            console.log(`Leap year`);
        }
    }
    else{
        console.log(`Non leap year`);
    }
}