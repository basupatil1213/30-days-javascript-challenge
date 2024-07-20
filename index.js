import { day1_learning } from "./Day1.js";
import { day2_learning } from "./Day2.js";
import { day3_learning } from "./Day3.js";
import { day4_learning } from "./Day4.js";
import { day5_learning } from "./Day5.js";
import { day6_learning } from "./Day6.js";
import { day7_learning } from "./Day7.js";
import { day8_learning } from "./Day8.js";

export const construct_log = (log_msg) => {
    console.log(`\n\n${formatter} ${log_msg} ${formatter}\n\n`);
}
export const formatter = "*".repeat(5) + " " + "-".repeat(10) + " " + "*".repeat(5);

// Day1: Variables and Data Types
construct_log('Day1: Variables and Data Types');
day1_learning();

// Day2: Operators
construct_log(`Day2: Operators`);
day2_learning();

// Day3: Control Structures
construct_log(`Day3: Control Structures`);
day3_learning();

// Daye4: Loops
construct_log(`Day4: Loops`);
day4_learning();

//Day5: Functions
construct_log(`Day5: Functions`);
day5_learning();


//Day6: Arrays
construct_log('Day6: Arrays');
day6_learning();

//Day7: Objects
construct_log('Day7: Objects');
day7_learning();

//Day8: ES6+ Features
construct_log('Day8: ES6+ Features');
day8_learning();