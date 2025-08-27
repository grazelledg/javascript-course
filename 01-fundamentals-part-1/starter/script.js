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

// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas *  2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:",  10 + 5);
// console.log("Subtraction:",  20 - 8);
// console.log("Multiplication:",  4 * 7);
// console.log("Division:",  15 / 30);
// console.log("Exponentiation:",  2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; 
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2; 
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);

// x--; 
// x--;
// console.log("After x-- twice:", x); 

// let score = 100; 

// score *= 2;
// score += 200; 
// score -= 23;

// score++;
// score++;

// console.log(score);

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30); 

// console.log("Number comparisons:");
// console.log(25 > 20); 
// console.log(15 < 10); 
// console.log(18 >= 18); 
// console.log(16 <= 15); 

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); 

// ////////////////////////////////////
// // Operator Precedence
// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018); 

// let z, y;
// z = y  = 25 - 10 - 5;
// console.log(z, y);



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);
// console.log("Is Mark's BMI higher than John's?", markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);


// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`Just a regular string...`);


// const myName = "Grazelle"; 
// const myAge = 20;
// const myJob = "student"; 
// const currentYear = 2024;


// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); 


// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("")); // false (empty string)

// let height = 0; // This is a valid height!
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); // This runs even though height IS defined!
// }

// // Better approach for checking if defined:
// if (height !== undefined) {
//   console.log("Height is defined");
// }

// ////////////////////////////////////
// // Coding Challenge #2 - BMI Comparison

// // ✅ Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// // Calculate BMIs
// let BMIMark = massMark / (heightMark ** 2);
// let BMIJohn = massJohn / (heightJohn ** 2);

// // Compare and log result
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// } else {
//   console.log(`Both Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
// }

// ////////////////////////////////////
// // ✅ Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// // Calculate BMIs
// BMIMark = massMark / (heightMark ** 2);
// BMIJohn = massJohn / (heightJohn ** 2);

// // Compare and log result
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// } else {
//   console.log(`Both Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
// }


const inputYear = "1991";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); 
console.log(typeof NaN); 

console.log(String(23), 23);
console.log(typeof String(23)); 


console.log("I am " + 23 + " years old"); 
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 


let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5"); 
console.log("10" - "4" - "3" - 2 + "5");



const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18);
console.log("18" === 18); 
console.log("18" == 18); 


console.log("0" == 0); 
console.log(0 == false); 
console.log("0" == false); 
console.log(null == undefined);

const hasDriversLicense = true; 
const hasGoodVision = true; 

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense); 

// More complex scenarios
const age = 20;
const hasPermission = true;
const hasExperience = false;


if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}




const age = 23;

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);


const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;


if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
  bonus = true;
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
} 


const bill = 275; 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

