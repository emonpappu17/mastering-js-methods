const orders = [
    { customer: 'Alice', items: [{ name: 'Laptop', price: 1000, qty: 1 }, { name: 'Mouse', price: 25, qty: 2 }] },
    { customer: 'Bob', items: [{ name: 'Keyboard', price: 50, qty: 1 }] },
    { customer: 'Alice', items: [{ name: 'Monitor', price: 300, qty: 1 }] }
];
// 1. Calculate total spent by each customer
// Expected: { Alice: 1350, Bob: 50 }
// (Alice: 1000 + 25*2 + 300 = 1350, Bob: 50)

const totalSpent = orders.reduce((acc, order) => {
    const orderTotal = order.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    acc[order.customer] = (acc[order.customer] || 0) + orderTotal;
    return acc;
}, {});

// console.log(totalSpent);


const students = [
    { name: 'John', grades: [80, 90, 85, 95] },
    { name: 'Jane', grades: [70, 75, 65] },
    { name: 'Jack', grades: [95, 98, 92, 100] },
    { name: 'Jill', grades: [60, 55, 50] }
];
// 2. Get names of students with average grade >= 80
// Expected: ['John', 'Jack']

const result = students.reduce((acc, student) => {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / student.grades.length;

    if (average >= 80) {
        acc.push(student.name);
    }

    return acc;
}, []);

console.log(result);