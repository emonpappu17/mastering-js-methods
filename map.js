// Create a function getRecentActiveUsers that takes an array of user objects. Each user has name (string), age (number), and isActive (boolean). Return an array of names of users who are active and older than 18. Use TypeScript interfaces and proper typing.


// const users = [
//     { name: "Limon", age: 15, isActive: true },
//     { name: "Emon", age: 19, isActive: true },
//     { name: "Tomal", age: 12, isActive: false },
//     { name: "Rinku", age: 27, isActive: false },
//     { name: "Sohag", age: 28, isActive: false },
//     { name: "Ratul", age: 24, isActive: true },
// ]



const getRecentActiveUsers = (arr) => {
    let user = [];
    arr.map((currentUser) => {
        if (currentUser.isActive === true && currentUser.age > 18) {
            // console.log({ currentUser });

            // if(currentUser.name !== undefined){
            // }
            return user.push(currentUser.name)

        }
    })
    return user
}

// console.log(getRecentActiveUsers(users));

// 1️⃣ Double the values (Basics)
// Input
// [2, 4, 6]

// Output
// [4, 8, 12]

// const values = [2, 4, 6]

const doubleValues = (arr) => {
    return arr.map((value) => value * 2)
}

// console.log(doubleValues(values));

// 2️⃣ Convert to strings (Type change)
// // Input
// [1, 2, 3]

// // Output
// ["1", "2", "3"]

const values = [1, 2, 3]

const convertToString = (arr) => {
    return arr.map((value) => value.toString())
}


// console.log(convertToString(values));

// 3️⃣ Capitalize names (String transform)
// // Input
// ["emon", "pappu", "rahim"]

// // Output
// ["Emon", "Pappu", "Rahim"]

// const names = ["emon", "pappu", "rahim"]

// const getCapitalizedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1))
// console.log(getCapitalizedNames);

// 4️⃣ Extract property(Objects)
// // Input
// [
//     { name: "Emon", age: 22 },
//     { name: "Pappu", age: 25 }
// ]

// // Output
// ["Emon", "Pappu"]

// const users = [
//     { name: "Emon", age: 22 },
//     { name: "Pappu", age: 25 }
// ]

// const names = users.map(user => user.name);

// console.log(names);

// 5️⃣ Add computed field (Backend style)
// // Input
// [
//   { price: 100 },
//   { price: 200 }
// ]

// // Output
// [
//   { price: 100, tax: 15 },
//   { price: 200, tax: 30 }
// ]

// const products = [
//     { price: 100 },
//     { price: 200 }
// ]

// const result = products.map((product) => ({
//     ...product,
//     tax: product.price * 0.15
// }))

// console.log(result);


// 6️⃣ Index - based transformation
// // Input
// ["a", "b", "c"]

// // Output
// ["a0", "b1", "c2"]

// const input = ["a", "b", "c"]

// const result = input.map((letter, i) => `${letter}${i}`)
// console.log(result);

// 7️⃣ Conditional mapping(NO filter)
// // Input
// [10, 3, 25]

// // Output
// ["High", "Low", "High"]

// const input = [10, 3, 25];

// const result = input.map((num) => (
//     num >= 10 ? "High" : "Low"
// ))

// console.log(result);

// 8️⃣ Nested map(Advanced)
// // Input
// [
//     [1, 2],
//     [3, 4]
// ]

// // Output
// [
//     [2, 4],
//     [6, 8]
// ]

// const input = [
//     [1, 2],
//     [3, 4]
// ]

// const result = input.map((item) => item.map(oneItem => oneItem * 2))

// console.log(result);


// 9️⃣ Use original array (arr)
// // Input
// [10, 20, 30]

// // Output (percentage of total)
// [16.66, 33.33, 50]

// const input = [10, 20, 30];

// const result = input.map((i, _, arr) => {
//     const total = arr.reduce((a, c) => c + a)

//     // return res = parseFloat(((i / total) * 100).toFixed(2))
//     return Number(((i / total) * 100).toFixed(2));
// })

// console.log(result);

// 🔟 Real industry formatting (API → UI)
// // Input
// [
//   { id: 1, title: "Learn JS" },
//   { id: 2, title: "Learn React" }
// ]

// // Output
// [
//   { id: 1, label: "Learn JS", url: "/course/1" },
//   { id: 2, label: "Learn React", url: "/course/2" }
// ]

// const input = [
//     { id: 1, title: "Learn JS" },
//     { id: 2, title: "Learn React" }
// ]

// const result = input.map((value) => {
//     return { id: value.id, label: value.title, url: `/course/${value.id}` }
// })

// console.log(result);