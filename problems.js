// 1.Task: Array Filtering and Mapping
const persons = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Ronaldo", age: 40, gender: "male" },
    { name: "Nickolas", age: 28, gender: "male" },
    { name: "Lusi", age: 25, gender: "female" },
    { name: "Hinata", age: 29, gender: "female" },
    { name: "Messi", age: 39, gender: "male" },
]

const getMaleNames = (arr) => {
    return arr.filter(person => person.gender !== "female").map(person => person.name)
}

console.log(getMaleNames(persons)); //[ 'Ronaldo', 'Nickolas', 'Messi' ]

// 2.Task: Object Manipulation
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
];

const getBookTiles = (arr) => {
    return arr.map(book => book.title)
}

console.log(getBookTiles(books)); //[ 'The Great Gatsby', '1984', 'The Hobbit' ]

// 3.Task: Function Composition
const square = num => num * num;
const double = num => num * 2;
const addFive = num => num + 5;

const composedFn = (num) => addFive(double(square(num)));

console.log(composedFn(3)); // 23

// 4.Task: Sorting Objects
const cars = [
    { make: "Toyota", model: "Corolla X", year: 2020 },
    { make: "Honda", model: "Civic 2", year: 2019 },
    { make: "Tesla", model: "Model 3", year: 2022 },
    { make: "BMW", model: "X5S", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2021 }
];

const sortByYear = (arr) => [...arr].sort((a, b) => a.year - b.year);

console.log(sortByYear(cars));

// 5.Task: Find and Modify
const personArr = [
    { name: "Alia", age: 25, gender: "female" },
    { name: "Ronaldo", age: 40, gender: "male" },
    { name: "Nickolas", age: 28, gender: "male" },
    { name: "Lusi", age: 25, gender: "female" },
    { name: "Hinata", age: 29, gender: "female" },
    { name: "Messi", age: 39, gender: "male" },
]

const updateAge = (arr, personName, newAge) => {
    return arr.map(person =>
        person.name === personName ? { ...person, age: newAge } : person
    );
};

console.log(updateAge(personArr, "Alia", 26));

// 6.Task: Array Reduction
const numbers = [1, 2, 3, 4, 5, 6];

const sumEvens = (arr) => arr.reduce((total, currentValue) => {
    return currentValue % 2 === 0 ? total + currentValue : total
}, 0)

console.log(sumEvens(numbers)); // 12

// 7. Task: Leap Year Checker
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year. Happy New Year`
    } else {
        return `${year} is not leap year`
    }
};

console.log(isLeapYear(2024)); // 2024 is a leap year. Happy New Year
console.log(isLeapYear(2026)); // is not leap year
