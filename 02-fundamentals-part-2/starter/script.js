// // // console.log("Part 2 is now working");

// // // console.log("=== FUNCTIONS ===");

// // // function logger() { 
// // //     console.log("My name is Grazelle");
// // // }

// // // logger();
// // // logger();


// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }

// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);

// // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // const juice3 = `Juice with 3 apples and 2 oranges.`;
// // // console.log(juice1);
// // // console.log(juice2);
// // // console.log(juice3);

// // // const calcAge = function (birthYear) {
// // //     return 2037 - birthYear;
// // // };

// // // const age1 = calcAge(1991);
// // // console.log(age1);

// // // const age2 = calcAge(1980);
// // // console.log(age2);

// // // const myAge = calcAge(1991, 2037);

// // // function introduce(firstName, lastName, age) {
// // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //   return introduction;
// // // }

// // // console.log(introduce("Grazelle", "De Guzman", 20)); // All good
// // // console.log(introduce("Sarah", "Connor", 45));



// // // function yearsUntilRetirement(birthYear, firstName) {
// // //   const age = calcAge(birthYear);
// // //   const retirement = 65 - age;

// // //   if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // //   } else {
// // //     return `${firstName} has already retired!`;
// // //   }
// // // }

// // // console.log(yearsUntilRetirement(1991, "Grazelle"));
// // // console.log(yearsUntilRetirement(1950, "Yuan"));


// // // const globalVar = "I am global";

// // // function testScope() {

// // //   const localVar = "I am local";
// // //   console.log(globalVar);
// // //   console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);


// // // const userName = "Jonas";

// // // function createWelcomeMessage(user) {
// // //     const message =  `Welcome back, ${user}!`;
// // //     const timestamp = new Date().toISOString();
// // //     return { message, timestamp };
// // // }




// // ////////////////////////////////////
// // // Coding Challenge #1

// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // }

// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
// // //   } else {
// // //     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
// // //   }
// // // }

// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // // Arrays and Data Manipulation 
// // // const student1Grade = 85;
// // // const student2Grade = 92;
// // // const student3Grade =78;

// // // const grades = [85, 92, 78, 96, 88];
// // // console.log(grades);

// // // const friends = ["Yuan", "Nash", "Qjuin"];
// // // console.log(friends);

// // // const mixed = ['Yuan', 20, true];
// // // console.log(mixed); 

// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);

// // // console.log(friends[0]);
// // // console.log(friends[1]);
// // // console.log(friends[2]);

// // // console.log(friends.length);
// // // console.log(friends[friends.length - 1]);

// // // friends[1] = "Nash";
// // // console.log(friends);

// // // const firstName = "Jonas";
// // // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // // console.log(jonas);

// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // console.log(ages);

// // // const newLength = friends.push("Jay");
// // // console.log(friends);
// // // console.log(newLength);

// // // friends.unshift("John");
// // // console.log(friends);


// // // const popped = friends.pop();
// // // console.log(popped);
// // // console.log(friends);

// // // const shifted = friends.shift();
// // // console.log(shifted);
// // // console.log(friends);

// // // console.log(friends.indexOf("Steven"));
// // // console.log(friends.indexOf("Bob"));

// // // console.log(friends.includes("Steven"));
// // // console.log(friends.includes("Bob")); 

// // // // Array Iterations

// // // for (let index = 0; index < friends.length; index++) {
// // //     const element = friends[index];
// // //     console.log(element);
// // // }


// // // friends.forEach(function (friend, index) {
// // //   console.log(`${index}: ${friend}`);
// // // });


// // // friends.forEach((friend, index) => {
// // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // });


// // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // let total = 0;

// // // for (let i = 0; i < grades.length; i++) {
// // //   total += grades[i];
// // // }
// // // const average = total / grades.length;
// // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // let passedCount = 0;
// // // grades.forEach((grade) => {
// // //   if (grade >= 70) passedCount++;
// // // });
// // // console.log(`${passedCount} out of ${grades.length} students passed`);




// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //   let sum = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     sum += grades[i];
// // //   }
// // //   return sum / grades.length;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   let highest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] > highest) {
// // //       highest = grades[i];
// // //     }
// // //   }
// // //   return highest;
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] < lowest) {
// // //       lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   let count = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if (grades[i] >= passingGrade) {
// // //       count++;
// // //     }
// // //   }
// // //   return count;
// // // }

// // // // Function to generate full grade report
// // // function generateReport(grades, passingGrade = 70) {
// // //   const average = calculateAverage(grades);
// // //   const highest = findHighestGrade(grades);
// // //   const lowest = findLowestGrade(grades);
// // //   const passing = countPassing(grades, passingGrade);

// // //   console.log("=== GRADE REPORT ===");
// // //   console.log(`Grades: [${grades.join(", ")}]`);
// // //   console.log(`Average: ${average.toFixed(2)}`);
// // //   console.log(`Highest: ${highest}`);
// // //   console.log(`Lowest: ${lowest}`);
// // //   console.log(`Passing students: ${passing} out of ${grades.length}`);
// // //   console.log(""); // blank line for readability
// // // }

// // // generateReport([78, 85, 92, 67, 88, 95, 73, 82]);   // Dataset 1
// // // generateReport([60, 75, 90, 40, 100]);              // Dataset 2
// // // generateReport([50, 55, 65, 45, 30]);               // Dataset 3




// // ////////////////////////////////////
// // // The Array Problem
// // const jonasArray = [
// //   "Jonas",
// //   "Schmedtmann",
// //   2037 - 1991,
// //   "teacher",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // console.log(jonasArray[0]); 
// // console.log(jonasArray[1]);
// // console.log(jonasArray[2]);

// // ////////////////////////////////////
// // // Objects - Creation with Object Literal Syntax
// // console.log("=== OBJECTS ===");

// // // Object literal syntax - curly braces create objects
// // const jonas = {
// //   firstName: "Jonas", // property: string value
// //   lastName: "Schmedtmann", // property: string value
// //   age: 2037 - 1991, // property: calculated value
// //   job: "teacher", // property: string value
// //   friends: ["Michael", "Peter", "Steven"], // property: array value
// // };
// // console.log(jonas);


// // const jonasObject = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   age: 46,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// // };

// // // Dot notation - clean and readable
// // console.log(jonas.firstName); // 'Jonas'
// // console.log(jonas.lastName); // 'Schmedtmann'
// // console.log(jonas.age); // 46
// // console.log(jonas.job); // 'teacher'
// // console.log(jonas.friends); // ['Michael', 'Peter', 'Steven']


// // // Bracket notation - uses strings
// // console.log(jonas["firstName"]); // Same result as dot notation
// // console.log(jonas["lastName"]);
// // console.log(jonas["age"]);
// // console.log(jonas["job"]);
// // console.log(jonas["friends"]);



// // // Bracket notation with expressions - compute property names!
// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]); // 'Jonas'
// // console.log(jonas["last" + nameKey]); // 'Schmedtmann'

// // // This is impossible with dot notation
// // // jonas.'first' + nameKey  // ❌ Syntax error!

// // // Both notations work for modification
// // jonas.job = "programmer";
// // jonas["age"] = 35;
// // console.log(jonas);

// // // Objects can grow - add properties after creation
// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// // jonas.hasDriversLicense = true;
// // console.log(jonas);

// // // Ordered, indexed data - think lists
// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];


// // // Objects can contain arrays, arrays can contain objects
// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], // Array inside object
// //   address: {
// //     // Object inside object
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); // 85
// // console.log(student.address.city); // 'New York'


// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     const currentYear = new Date().getFullYear();
// //     this.age = currentYear - this.birthYear;
// //     return this.age;
// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     this.friends.push({ name, status });
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     return this.friends.filter(friend => friend.status === "active").length;
// //   },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     const age = this.calcAge();
// //     const activeFriends = this.getActiveFriends();
// //     const totalFriends = this.friends.length;
// //     const status = this.isActive ? "online" : "offline";

// //     return `
// //      ${this.firstName} ${this.lastName}, ${age} years old
// //      Location: ${this.location}
// //      Status: ${status}
// //      Friends: ${activeFriends} active / ${totalFriends} total
// //      Interests: ${this.interests.join(", ")}
// //     `;
// //   },
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());




// // querySelector - works with any CSS selector
// const message = document.querySelector(".message"); // Select by class
// const button = document.querySelector("#btn"); // Select by ID
// const heading = document.querySelector("h1"); // Select by tag
// const input = document.querySelector(".guess"); // Select by class

// console.log(message);
// console.log(button);
// console.log(heading);

// // Different selector types
// document.querySelector(".className"); // Class selector
// document.querySelector("#idName"); // ID selector
// document.querySelector("tagName"); // Tag selector
// document.querySelector('[type="text"]'); // Attribute selector
// document.querySelector("div p"); // Descendant selector

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); // Same element, different method


// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // NodeList (like an array)
// console.log(allParagraphs[0]); // First paragraph
// console.log(allParagraphs.length); // Number of paragraphs




////////////////////////////////////
// Modifying Element Content

const message = document.querySelector(".message");

console.log(message.textContent); // "Start interacting!"
message.textContent = "Hello from JavaScript!";

// innerHTML - includes HTML tags (more powerful but be careful)
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText - respects styling (what user actually sees)
console.log(message.innerText);

// Input elements use .value property, not textContent
const input = document.querySelector(".guess");

console.log(input.value); // Current input value
input.value = "Default text"; // Set input value
input.placeholder = "Type here"; 


// Changing element styles with the style property
const heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow"; // Note: camelCase!
heading.style.fontSize = "3rem";
heading.style.padding = "20px";
heading.style.borderRadius = "10px";



// Event listener with state management
let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// Keyboard events - responding to specific keys
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; // Clear input
  }
});

// Global keyboard events
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Reset everything
    message.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
    button.textContent = "Click Me!";
  }
});
