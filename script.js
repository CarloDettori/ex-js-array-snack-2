//CONSEGNE SNACK IN FILE README

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

let longBooks = books.filter(el => el.pages > 300)
//console.log(longBooks)

let longBooksTitles = longBooks.map(el => el.title)
//console.log(longBooksTitles)

longBooksTitles.forEach(el => console.log(el))



//SNACK 2 ______________________________________________________________________________________

let availableBooks = books.filter(el => el.available === true)
//console.log(availableBooks)

let discountedBooks = availableBooks.forEach((el) => {
    let fullDecimals = parseInt(el.price) * 0.8
    return fullDecimals.toFixed(2) + " €"
})
//console.log(discountedBooks)

let fullPricedBook


//SNACK 3 ______________________________________________________________________________________

let authors = books.map((el) => {
    return el.author
})
//console.log(authors)

let areAuthorsAdults = authors.every((el) => {
    return el.age >= 18
})
//console.log(areAuthorsAdults)

let sortedautors = authors.sort((a, b) => {
    return a.age - b.age
})
//console.log(sortedautors)

let ageSumm = sortedautors.reduce((acc, curr) => acc + curr.age, 0)
let averageAge = ageSumm / sortedautors.length
//console.log(averageAge)


//SNACK 4 ______________________________________________________________________________________

let ages = books.map((el) => {
    return el.author.age
})
//console.log(ages)

let agesSumm2 = ages.reduce((acc, curr) => acc + curr, 0)
//console.log(agesSumm2)

let averageAge2 = ageSumm / sortedautors.length
//console.log(averageAge2)



//SNACK 5 ______________________________________________________________________________________

const booksID = [2, 13, 7, 21, 19]

async function fetchData(url) {
    const data = await fetch(url)
    const useData = data.json()
    return useData
}

async function getBooks(ids) {
    const bookList = ids.map((id) => { return fetchData(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`) })
    const datas = await Promise.all(bookList)
    return datas
}

(async () => {
    const mybooks = await getBooks(booksID)
    //console.log(mybooks)
})()







//SNACK 6 ______________________________________________________________________________________


const areThereAvailableBooks = books.some((el) => el.available == true)
//console.log(areThereAvailableBooks)

const booksByPrice = books.sort((a, b) => {
    return parseInt(a.price) - parseInt(b.price)
})
//console.log(booksByPrice)

const trueBooksFirst = booksByPrice.sort((a, b) => {
    return String(b.available).localeCompare(String(a.available))
})
//console.log(trueBooksFirst)


//SNACK 7 ______________________________________________________________________________________

function tags(array) {

    return array.reduce((acc, book) => {
        book.tags.forEach((tag) => {
            if (!acc[tag]) {
                acc[tag] = 1
            } else {
                acc[tag]++
            }
        })
        return acc
    }, {})

}

console.log(tags(books))