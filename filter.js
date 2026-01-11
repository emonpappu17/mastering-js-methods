// 1️⃣ Keep even numbers (Basics)
// // Input
// [1, 2, 3, 4, 5, 6]

// // Output
// [2, 4, 6]

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.filter((num) => (num % 2) === 0);

// console.log(result);

// 2️⃣ Numbers greater than 10
// // Input
// [5, 12, 8, 20, 3]

// // Output
// [12, 20]

// const numbers = [5, 12, 8, 20, 3];

// const result = numbers.filter((num) => 10 < num);
// console.log(result);

//3️⃣ Truthy values only (JS fundamentals)
// Input
// [0, 1, false, true, "", "JS", null, undefined]

// // Output
// [1, true, "JS"]

// const values = [0, 1, false, true, "", "JS", null, undefined];

// const result = values.filter((value) => value && true);
// console.log(result);

// 4️⃣ Remove duplicate values (Interview classic)
// // Input
// [1, 2, 2, 3, 3, 4]

// // Output
// [1, 2, 3, 4]

// const values = [1, 2, 2, 3, 3, 4];

// const result = values.filter((value, i, arr) => arr.indexOf(value) === i);

// console.log(result);

// 5️⃣ Active users only (Objects)
// // Input
// [
//   { name: "Emon", isActive: true },
//   { name: "Pappu", isActive: false },
//   { name: "Rahim", isActive: true }
// ]

// // Output
// [
//   { name: "Emon", isActive: true },
//   { name: "Rahim", isActive: true }
// ]

const users = [
    { name: "Emon", isActive: true },
    { name: "Pappu", isActive: false },
    { name: "Rahim", isActive: true }
]

const result = users.filter((user) => user.isActive)

console.log(result);