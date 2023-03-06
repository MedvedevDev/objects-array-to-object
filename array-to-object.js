const arr = [
    { name: "Art", age: 25 },
    { name: "Alena", age: 30 },
    { name: "Nekit", age: 27 }
];

const obj = arr.reduce((acc, cur) => {
    acc[cur.name] = cur.age;
    return acc;
}, {});

console.log(obj); // { Art: 25, Alena: 30, Nekit: 27 }

// If the names of the properties of the objects in the array are different
const products = [
    {
        _id: '1',
        name: 'Learning JavaScript Design Patterns: A JavaScript and React Developer\'s Guide',
        image: '/images/2.jpg',
    },
    {
        description:
            'Author Addy Osmani shows you how to apply modern design patterns to JavaScript and React.',
        author: 'Addy Osmani'
    },
    {
        category: 'Computer Science',
        price: 60.78,
        countInStock: 7
    },
    {
        rating: 4.0,
        numReviews: 8
    }];

const books = products.reduce((result, current) => {
    return Object.assign(result, current);
}, {});

console.log(books);



