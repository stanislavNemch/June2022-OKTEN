
let bookObjectOne = {
    title: 'BookOne',
    pageCount: 756,
    genre: 'fantastic',
    authors: [
        {name: 'NameOne', age: 36},
        {name: 'NameOne1', age: 40},
        {name: 'NameOne2', age: 44}
    ]
}

let bookObjectTwo = {
    title: 'BookTwo',
    pageCount: 654,
    genre: 'action',
    authors: [
        {name: 'NameTwo', age: 36},
        {name: 'NameTwo1', age: 40}
    ]
}

let bookObjectThree = {
    title: 'BookThree',
    pageCount: 436,
    genre: 'thriller',
    authors: [
        {name: 'NameThree', age: 36},
        {name: 'NameThree1', age: 40}
    ]
}

console.log(bookObjectThree.authors.name);
console.log(bookObjectOne.authors.age);
console.log(bookObjectTwo.genre);
console.log(bookObjectThree.authors[1].name)