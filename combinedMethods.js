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
