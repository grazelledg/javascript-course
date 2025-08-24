// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10); 
// console.log(js);

// console.log("=== VARIABLES ===");
// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear); 

// const PI = 3.1415;
// console.log(PI); 

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// console.log("=== DATA TYPES ===")

// let id = 12345;
// console.log(id);
// console.log(typeof id)

console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas *  2, ageJonas / 10, 2 ** 3);

console.log("Math operations");
console.log("Addition:",  10 + 5);
console.log("Subtraction:",  20 - 8);
console.log("Multiplication:",  4 * 7);
console.log("Division:",  15 / 30);
console.log("Exponentiation:",  2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; 
console.log("x starts as:", x);

x += 10;
console.log("After x += 10:", x);

x *= 4;
console.log("After x *= 4:", x);

x /= 2; 
console.log("After x /= 2:", x);

x++;
console.log("After x++:", x);

x--; 
x--;
console.log("After x-- twice:", x); 

let score = 100; 

score *= 2;
score += 200; 
score -= 23;

score++;
score++;

console.log(score);

console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30); 

console.log("Number comparisons:");
console.log(25 > 20); 
console.log(15 < 10); 
console.log(18 >= 18); 
console.log(16 <= 15); 

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); 

////////////////////////////////////
// Operator Precedence
console.log("=== OPERATOR PRECEDENCE ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); 

let z, y;
z = y  = 25 - 10 - 5;
console.log(z, y);



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

