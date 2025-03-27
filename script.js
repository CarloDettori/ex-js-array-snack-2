"use strict"

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];



//SNACK 1 ______________________________________________________________________________________

function somma(a, b) {
    return a + b
}

let longBooks = books.filter((el) => {
    return el.pages > 300
})
console.log(longBooks)

let longBooksTitles = longBooks.map((el) => {
    return el.title
})
console.log(longBooksTitles)



//SNACK 2 ______________________________________________________________________________________

let availableBooks = books.filter((el) => {
    return el.available === true
})
console.log(availableBooks)

let discountedBooks = availableBooks.map((el) => {
    let fullDecimals = parseInt(el.price) * 0.8
    return fullDecimals.toFixed(2)
})

console.log(discountedBooks)