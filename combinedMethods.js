// 1. Basic Operations Combined
products = [
    { id: 101, name: 'Laptop', price: 1000, stock: 5 },
    { id: 102, name: 'Mouse', price: 25, stock: 0 },
    { id: 103, name: 'Keyboard', price: 75, stock: 10 },
    { id: 104, name: 'Monitor', price: 300, stock: 3 }
];

// Task A: Use forEach to print all product names
// Task B: Use find to get the product with id 103
// Task C: Use findIndex to get the position of the out-of-stock item
// Expected:

// A: Logs "Laptop", "Mouse", "Keyboard", "Monitor"
// B: { id: 103, name: 'Keyboard', price: 75, stock: 10 }
// C: 1 (Mouse is at index 1)

// Task A: Use forEach to print all product names
products.forEach((product) => console.log(product.name
))

// Task B: Use find to get the product with id 103
const product = products.find(product => product.id === 103);
console.log(product);

// Task C: Use findIndex to get the position of the out-of-stock item
const outOfStockIndex = products.findIndex(product => product.stock === 0);
console.log(outOfStockIndex);

// 2. Modify External Data (forEach specialty)
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 95 }
];

const grades = [];

// Use forEach to:
// 1. Add 5 bonus points to each student's score
// 2. Push their grade letter to grades array
//    (A: 90+, B: 80-89, C: 70-79, D: <70)
// Expected:

// Modified students with scores: 90, 97, 83, 100
// grades array: ['A', 'A', 'B', 'A']

students.forEach((student) => {
    student.score += 5;

    let grade;

    if (student.score >= 90) {
        grade = 'A'
    } else if (student.score >= 80) {
        grade = 'B'
    } else if (student.score >= 70) {
        grade = 'c'
    } else {
        grade = 'D'
    }
    grades.push(grade)
})
console.log(students);
console.log(grades);

// 3. Complex Search with Conditions
const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com', age: 25, active: true },
    { id: 2, username: 'jane_smith', email: 'jane@example.com', age: 30, active: false },
    { id: 3, username: 'bob_jones', email: 'bob@example.com', age: 35, active: true },
    { id: 4, username: 'alice_wonder', email: 'alice@example.com', age: 28, active: true }
];

// Task A: Use find to get the first active user who is older than 30
// Task B: Use findIndex to locate the inactive user's position
// Task C: Use find to check if email 'bob@example.com' exists (return the user or undefined)
// Expected:

// A: { id: 3, username: 'bob_jones', ... }
// B: 1
// C: { id: 3, username: 'bob_jones', email: 'bob@example.com', age: 35, active: true }

const activeUser = users.find((user) => user.active && user.age > 30);
console.log(activeUser);

const inActiveUserIndex = users.findIndex((user) => !user.active);
console.log(inActiveUserIndex);

const emailUserExist = users.find((user) => user.email === 'bob@example.com');
console.log(emailUserExist);


// 4. Working with Nested Data
const orders = [
    { orderId: 'A1', customer: 'John', items: ['Laptop', 'Mouse'], total: 1025, paid: true },
    { orderId: 'A2', customer: 'Jane', items: ['Keyboard'], total: 75, paid: false },
    { orderId: 'A3', customer: 'Bob', items: ['Monitor', 'Cable'], total: 350, paid: true },
    { orderId: 'A4', customer: 'Alice', items: ['Desk'], total: 200, paid: false }
];

// Task A: Use forEach to create a summary report logging:
//         "Order A1: John - $1025 - Status: Paid"
// Task B: Use find to get the first unpaid order
// Task C: Use findIndex to find position of order that contains 'Monitor'
// Expected:

// A: Logs 4 lines with order summaries
// B: { orderId: 'A2', customer: 'Jane', ... }
// C: 2

orders.forEach((order) => {
    const status = order.paid ? 'Paid' : 'Unpaid';
    console.log(`Order ${order.orderId}: ${order.customer} - $${order.total} - Status: ${status}`);
})

const firstUnpaidOrder = orders.find(order => !order.paid)
console.log(firstUnpaidOrder);

const monitorIndex = orders.findIndex((order) => order.items.includes('Monitor'))
console.log(monitorIndex);