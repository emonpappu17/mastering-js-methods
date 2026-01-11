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

// const users = [
//     { name: "Emon", isActive: true },
//     { name: "Pappu", isActive: false },
//     { name: "Rahim", isActive: true }
// ]

// const result = users.filter((user) => user.isActive)

// console.log(result);

// 6️⃣ Adults only (Condition logic)
// // Input
// [
//   { name: "Emon", age: 22 },
//   { name: "Pappu", age: 16 },
//   { name: "Rahim", age: 18 }
// ]

// // Output
// [
//   { name: "Emon", age: 22 },
//   { name: "Rahim", age: 18 }
// ]

// const users = [
//     { name: "Emon", age: 22 },
//     { name: "Pappu", age: 16 },
//     { name: "Rahim", age: 18 }
// ]

// const result = users.filter((user) => user.age
//     >= 18)

// console.log(result);

// 7️⃣ Search filter(Frontend - style)
// // Input
// const search = "js";

// [
//     "JavaScript",
//     "React",
//     "NodeJS",
//     "CSS"
// ]

// // Output
// ["JavaScript", "NodeJS"]

// const search = "s";

// const skills = [
//     "JavaScript",
//     "React",
//     "NodeJS",
//     "CSS"
// ]

// const result = skills.filter((skill) => skill.toLowerCase().includes(search.toLowerCase()))

// console.log(result);

// 8️⃣ Remove null / undefined (Data cleaning)
// // Input
// ["Emon", null, "Pappu", undefined, "", "Rahim"]

// // Output
// ["Emon", "Pappu", "Rahim"]

// const users = ["Emon", null, "Pappu", undefined, "  ", "Rahim"];

// const result = users.filter((user) => user && user.trim());

// console.log(result);

// 9️⃣ Price range filter(Backend - style)
// // Input
// [
//     { product: "Phone", price: 30000 },
//     { product: "Laptop", price: 80000 },
//     { product: "Tablet", price: 20000 }
// ]

// // Output (price ≥ 30000)
// [
//     { product: "Phone", price: 30000 },
//     { product: "Laptop", price: 80000 }
// ]

// const products = [
//     { product: "Phone", price: 30000 },
//     { product: "Laptop", price: 80000 },
//     { product: "Tablet", price: 20000 }
// ]

// const result = products.filter((product) => product.price >= 30000)

// console.log(result);

// 🔟 Permission - based access(Industry level)
// // Input
// const role = "admin";

// [
//     { page: "Dashboard", roles: ["admin", "user"] },
//     { page: "Settings", roles: ["admin"] },
//     { page: "Profile", roles: ["user"] }
// ]

// // Output
// [
//     { page: "Dashboard", roles: ["admin", "user"] },
//     { page: "Settings", roles: ["admin"] }
// ]

const role = "admin";

const users = [
    { page: "Dashboard", roles: ["admin", "user"] },
    { page: "Settings", roles: ["admin"] },
    { page: "Profile", roles: ["user"] }
]

const result = users.filter((user) => user.roles.includes(role))

console.log(result);