// console.log("Part 2 is now working");

// console.log("=== FUNCTIONS ===");

// function logger() { 
//     console.log("My name is Grazelle");
// }

// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;
// console.log(juice1);
// console.log(juice2);
// console.log(juice3);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calcAge(1991);
// console.log(age1);

// const age2 = calcAge(1980);
// console.log(age2);

// const myAge = calcAge(1991, 2037);

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Grazelle", "De Guzman", 20)); // All good
// console.log(introduce("Sarah", "Connor", 45));



// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(1991, "Grazelle"));
// console.log(yearsUntilRetirement(1950, "Yuan"));


// const globalVar = "I am global";

// function testScope() {

//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(globalVar);


// const userName = "Jonas";

// function createWelcomeMessage(user) {
//     const message =  `Welcome back, ${user}!`;
//     const timestamp = new Date().toISOString();
//     return { message, timestamp };
// }




////////////////////////////////////
// Coding Challenge #1

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
//   }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// Arrays and Data Manipulation 
const student1Grade = 85;
const student2Grade = 92;
const student3Grade =78;

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ["Yuan", "Nash", "Qjuin"];
console.log(friends);

const mixed = ['Yuan', 20, true];
console.log(mixed); 

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Nash";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
console.log(ages);

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);


const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob")); 

// Array Iterations

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
}


friends.forEach(function (friend, index) {
  console.log(`${index}: ${friend}`);
});


friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});


const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);




// Function to calculate average
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Function to generate full grade report
function generateReport(grades, passingGrade = 70) {
  const average = calculateAverage(grades);
  const highest = findHighestGrade(grades);
  const lowest = findLowestGrade(grades);
  const passing = countPassing(grades, passingGrade);

  console.log("=== GRADE REPORT ===");
  console.log(`Grades: [${grades.join(", ")}]`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Highest: ${highest}`);
  console.log(`Lowest: ${lowest}`);
  console.log(`Passing students: ${passing} out of ${grades.length}`);
  console.log(""); // blank line for readability
}

generateReport([78, 85, 92, 67, 88, 95, 73, 82]);   // Dataset 1
generateReport([60, 75, 90, 40, 100]);              // Dataset 2
generateReport([50, 55, 65, 45, 30]);               // Dataset 3





