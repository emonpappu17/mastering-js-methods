const orders = [
    { customer: 'Alice', items: [{ name: 'Laptop', price: 1000, qty: 1 }, { name: 'Mouse', price: 25, qty: 2 }] },
    { customer: 'Bob', items: [{ name: 'Keyboard', price: 50, qty: 1 }] },
    { customer: 'Alice', items: [{ name: 'Monitor', price: 300, qty: 1 }] }
];
// Calculate total spent by each customer
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

console.log(totalSpent);


