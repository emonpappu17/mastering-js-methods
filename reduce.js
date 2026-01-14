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

// const result = students.reduce((acc, student) => {
//     const sum = student.grades.reduce((total, grade) => total + grade, 0);
//     const average = sum / student.grades.length;

//     if (average >= 80) {
//         acc.push(student.name);
//     }

//     return acc;
// }, []);

// console.log(result);

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', inStock: true, price: 1000 },
    { id: 2, name: 'Mouse', category: 'Electronics', inStock: false, price: 25 },
    { id: 3, name: 'Desk', category: 'Furniture', inStock: true, price: 200 },
    { id: 4, name: 'Chair', category: 'Furniture', inStock: true, price: 150 }
];
// 3. Group by category, but only include in-stock items with their total value
// Expected: {
//   Electronics: { items: ['Laptop'], totalValue: 1000 },
//   Furniture: { items: ['Desk', 'Chair'], totalValue: 350 }
// }


// const result = products.reduce((acc, currentProduct) => {
//     if (currentProduct.inStock) {
//         if (!acc[currentProduct.category]) {
//             acc[currentProduct.category] = { items: [], totalValue: 0 }
//         }
//         acc[currentProduct.category]?.items?.push(currentProduct.name);
//         acc[currentProduct.category].totalValue += currentProduct.price;
//     }

//     return acc
// }, {})
// console.log(result);

const posts = [
    { author: 'Alice', tags: ['javascript', 'react', 'nodejs'] },
    { author: 'Bob', tags: ['python', 'javascript'] },
    { author: 'Charlie', tags: ['react', 'javascript', 'css'] },
    { author: 'David', tags: ['nodejs', 'python', 'javascript'] }
];
// 4. Find the most used tag and how many times it appears
// Expected: { tag: 'javascript', count: 4 }

const result = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
        acc.tagCounts[tag] = (acc.tagCounts[tag] || 0) + 1;

        if (acc.tagCounts[tag] > acc.mostUsed.count) {
            acc.mostUsed = {
                tag: tag,
                count: acc.tagCounts[tag]
            }
        }
    })

    return acc
}, { tagCounts: {}, mostUsed: { tag: '', count: 0 } }).mostUsed

// console.log(result);


const transactions = [
    { date: '2024-01-15', type: 'income', amount: 5000, category: 'salary' },
    { date: '2024-01-16', type: 'expense', amount: 200, category: 'food' },
    { date: '2024-01-17', type: 'expense', amount: 1000, category: 'rent' },
    { date: '2024-01-18', type: 'income', amount: 500, category: 'freelance' },
    { date: '2024-01-19', type: 'expense', amount: 150, category: 'food' },
    { date: '2024-01-20', type: 'expense', amount: 300, category: 'utilities' }
];
// Use ONE reduce to create a financial summary:
// Expected: {
//   totalIncome: 5500,
//   totalExpense: 1650,
//   balance: 3850,
//   expenseByCategory: { food: 350, rent: 1000, utilities: 300 },
//   largestExpense: { date: '2024-01-17', amount: 1000, category: 'rent' }
// }

const financialSummary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
        acc.totalIncome += transaction.amount
    }
    if (transaction.type === "expense") {
        acc.totalExpense += transaction.amount

        acc.expenseByCategory[transaction.category] = (acc.expenseByCategory[transaction.category] || 0) + transaction.amount;

        if (transaction.amount > acc.largestExpense.amount) {
            acc.largestExpense = {
                date: transaction.date,
                amount: transaction.amount,
                category: transaction.category
            }
        }
    }

    acc.balance = acc.totalIncome - acc.totalExpense;
    return acc
}, {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    expenseByCategory: {},
    largestExpense: { date: '', amount: 0, category: '' }
})

console.log(financialSummary);