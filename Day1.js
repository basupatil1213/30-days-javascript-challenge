export const day1_learning = () => {
    // Day1: Variables and Data Types

    //Activity 1: Variable declaration

    //Task1:  Declare a variable using var, assign it a number, and log the value to the console.

    var number = 143;
    console.log(number);

    //Task2:  Declare a variable using let, assign it a string, and log the value to the console.

    let string = "Learn JavaScript";
    console.log(string);

    // Activity 2: Constant Declaration

    // Task 3:  Declare a variable using const, assign it a boolean value, and log the value to the console.

    const constant = true;
    console.log(constant);

    // Activity 3: Data Types

    // Task 4:  Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

    let num = 1999;
    console.log(typeof num);

    let fullname = "Virat Kholi";
    console.log(typeof fullname);

    let isadult = true;
    console.log(typeof isadult);

    let personalDetails = {
        career: "Crickter",
        fans: "Infinity",
        isFit: true,
    };
    console.log(typeof personalDetails);

    let odd_numbers = [1, 3, 5, 7, 8, 9];
    console.log(typeof odd_numbers);

    // Activity 4: Reassigning Variables

    // Task 5:  Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

    let full_name = "Virat Kholi";
    console.log(full_name);

    full_name = "Virat The King Kholi";
    console.log(full_name);

    // Activity 5: Understanding const

    // Task 6: Try reassigning a variable declared with const  and observe the error.

    const place = "India";

    try {
        place = "America";
    } catch (error) {
        console.log(error);
    }
};
