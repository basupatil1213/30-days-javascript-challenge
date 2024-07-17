import { day1_learning } from "./Day1.js";
import { day2_learning } from "./Day2.js";
import { day3_learning } from "./Day3.js";
import { day4_learning } from "./Day4.js";
import { day5_learning } from "./Day5.js";

export const construct_log = (log_msg) => {
    console.log(`\n\n${formatter} ${log_msg} ${formatter}\n\n`);
}
export const formatter = "*".repeat(5) + " " + "-".repeat(10) + " " + "*".repeat(5);

// Day1: Variables and Data Types
console.log(`\n\n${formatter} Day1: Variables and Data Types ${formatter}\n\n`);
day1_learning();

// Day2: Operators
console.log(`\n\n${formatter} Day2: Operators ${formatter}\n\n`);
day2_learning();

// Day3: Control Structures
console.log(`\n\n${formatter} Day3: Control Structures ${formatter}\n\n`);
day3_learning();

// Daye4: Loops
console.log(`\n\n${formatter} Day4: Loops ${formatter}\n\n`);
day4_learning();

//Day5: Functions
console.log(`\n\n${formatter} Day4: Loops ${formatter}\n\n`);
day5_learning();
