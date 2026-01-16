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
// const users = [
//     { id: 1, username: 'john_doe', email: 'john@example.com', age: 25, active: true },
//     { id: 2, username: 'jane_smith', email: 'jane@example.com', age: 30, active: false },
//     { id: 3, username: 'bob_jones', email: 'bob@example.com', age: 35, active: true },
//     { id: 4, username: 'alice_wonder', email: 'alice@example.com', age: 28, active: true }
// ];

// Task A: Use find to get the first active user who is older than 30
// Task B: Use findIndex to locate the inactive user's position
// Task C: Use find to check if email 'bob@example.com' exists (return the user or undefined)
// Expected:

// A: { id: 3, username: 'bob_jones', ... }
// B: 1
// C: { id: 3, username: 'bob_jones', email: 'bob@example.com', age: 35, active: true }

// const activeUser = users.find((user) => user.active && user.age > 30);
// console.log(activeUser);

// const inActiveUserIndex = users.findIndex((user) => !user.active);
// console.log(inActiveUserIndex);

// const emailUserExist = users.find((user) => user.email === 'bob@example.com');
// console.log(emailUserExist);


// 4. Working with Nested Data
// const orders = [
//     { orderId: 'A1', customer: 'John', items: ['Laptop', 'Mouse'], total: 1025, paid: true },
//     { orderId: 'A2', customer: 'Jane', items: ['Keyboard'], total: 75, paid: false },
//     { orderId: 'A3', customer: 'Bob', items: ['Monitor', 'Cable'], total: 350, paid: true },
//     { orderId: 'A4', customer: 'Alice', items: ['Desk'], total: 200, paid: false }
// ];

// Task A: Use forEach to create a summary report logging:
//         "Order A1: John - $1025 - Status: Paid"
// Task B: Use find to get the first unpaid order
// Task C: Use findIndex to find position of order that contains 'Monitor'
// Expected:

// A: Logs 4 lines with order summaries
// B: { orderId: 'A2', customer: 'Jane', ... }
// C: 2

// orders.forEach((order) => {
//     const status = order.paid ? 'Paid' : 'Unpaid';
//     // console.log(`Order ${order.orderId}: ${order.customer} - $${order.total} - Status: ${status}`);
// })

// const firstUnpaidOrder = orders.find(order => !order.paid)
// console.log(firstUnpaidOrder);

// const monitorIndex = orders.findIndex((order) => order.items.includes('Monitor'));
// console.log(monitorIndex);


// 1. Basic Validation Checks
const ages = [16, 18, 21, 25, 30];
const numbers = [2, 4, 6, 8, 10];
const fruits = ['apple', 'banana', 'orange', 'mango'];

// Task A: Use some() to check if ANY person is under 18
// Task B: Use every() to check if ALL numbers are even
// Task C: Use includes() to check if 'grape' is in the fruits array
// Expected:

// A: true (16 is under 18)
// B: true (all are even: 2, 4, 6, 8, 10)
// C: false (grape is not in array)

const isUnderAge = ages.some((age) => age < 18);
// console.log('isUnderAge==>', isUnderAge);

const isAllNumberEven = numbers.every((num) => (num % 2) === 0)
// console.log('isAllNumberEven==>', isAllNumberEven);

const isGrapeInclude = fruits.includes('grape');
// console.log('isGrapeInclude==>', isGrapeInclude);

// 2. User Access Control
const users = [
    { name: 'Alice', age: 25, isAdmin: false, verified: true },
    { name: 'Bob', age: 30, isAdmin: true, verified: true },
    { name: 'Charlie', age: 22, isAdmin: false, verified: false },
    { name: 'David', age: 28, isAdmin: false, verified: true }
];

const allowedRoles = ['admin', 'moderator', 'user'];
const currentUserRole = 'editor';

// Task A: Use some() to check if there's at least one admin in the system
// Task B: Use every() to check if all users are verified
// Task C: Use includes() to check if currentUserRole is in allowedRoles
// Expected:

// A: true(Bob is admin)
// B: false(Charlie is not verified)
// C: false(editor is not in allowedRoles)

const isOneAdminExist = users.some((user) => user.isAdmin);
console.log('isOneAdminExist==>', isOneAdminExist);

const isAllUsersVerified = users.every(user => user.verified)
console.log('isAllUsersVerified=>', isAllUsersVerified);

const isCurrentRoleAllowed = allowedRoles.includes(currentUserRole)
console.log('isCurrentRoleAllowed==>', isCurrentRoleAllowed);

// 5. E-commerce Order Validation (Master Level)
const orders = [
    { orderId: 'A1', items: ['Laptop', 'Mouse'], total: 1025, paid: true, shipped: true },
    { orderId: 'A2', items: ['Keyboard'], total: 75, paid: true, shipped: false },
    { orderId: 'A3', items: ['Monitor'], total: 300, paid: false, shipped: false },
    { orderId: 'A4', items: ['Desk', 'Chair'], total: 600, paid: true, shipped: true }
];

const requiredItems = ['Laptop', 'Monitor', 'Keyboard'];
const availablePaymentMethods = ['credit_card', 'paypal', 'bank_transfer'];
const selectedPayment = 'crypto';

// Task A: Use some() to check if any order is unpaid
// Task B: Use every() to check if all paid orders have been shipped
// Task C: Use includes() to check if selectedPayment is available
// Task D: Use some() to check if any order contains 'Laptop'
// Task E: Use every() to check if all orders have at least one item
// Expected:

// A: true (Order A3 is unpaid)
// B: false (Order A2 is paid but not shipped)
// C: false (crypto is not in availablePaymentMethods)
// D: true (Order A1 contains Laptop)
// E: true (all orders have items)

const isAnyOrderUnpaid = orders.some(order => !order.paid)
console.log('isAnyOrderUnpaid', isAnyOrderUnpaid);

const isAllOrderShipped = orders.every(order => order.paid && order.shipped)
console.log('isAllOrderShipped==>', isAllOrderShipped);

const isPaymentAvailable = availablePaymentMethods.includes(selectedPayment);
console.log("==>", isPaymentAvailable);

const isAnyOrderContainsLaptop = orders.some(order => order.items.includes('Laptop'))

console.log('isAnyOrderContainsLaptop==>', isAnyOrderContainsLaptop);

const isAtLeastOneItem = orders.every(order => order.items.length);
console.log(';isAtLeastOneItem=>', isAtLeastOneItem);