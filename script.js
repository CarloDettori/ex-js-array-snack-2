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
//console.log(longBooks)

let longBooksTitles = longBooks.map((el) => {
    return el.title
})
//console.log(longBooksTitles)



//SNACK 2 ______________________________________________________________________________________

let availableBooks = books.filter((el) => {
    return el.available === true
})
//console.log(availableBooks)

let discountedBooks = availableBooks.map((el, index) => {
    let fullDecimals = parseInt(el.price) * 0.8

    return fullDecimals.toFixed(2)
})

//console.log(discountedBooks)



//SNACK 3 ______________________________________________________________________________________

let authors = books.map((el) => {
    return el.author
})
console.log(authors)

let areAuthorsAdults = authors.every((el) => {
    return el.age >= 18
})
console.log(areAuthorsAdults)

let sortedautors = authors.sort((a, b) => {
    return a.age - b.age
})
console.log(sortedautors)

let ageSumm = sortedautors.reduce((acc, curr) => acc + curr.age, 0)
let averageAge = ageSumm / sortedautors.length
console.log(averageAge)


//SNACK 4 ______________________________________________________________________________________

let ages = books.map((el) => {
    return el.author.age
})
console.log(ages)

let agesSumm = ages.reduce((acc, curr) => acc + curr, 0)
console.log(agesSumm)