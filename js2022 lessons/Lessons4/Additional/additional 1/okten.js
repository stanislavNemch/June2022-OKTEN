// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrayNumber = [ 1, 2, 3, 4, 5];
for (const number of arrayNumber) {
    document.write(number + " ");
}
document.write(`<hr>`);

let arrayString = [`Лиза`, `Петя`, `Олеся`, `Саша`, `Игорь`];
for (const string of arrayString) {
    document.write(string + " ");
}
document.write(`<hr>`);

let arrayStringBoolNumber = [`One`, false, 19, `Good`, true];
for (const arrayStringBoolNumberElement of arrayStringBoolNumber) {
    document.write(arrayStringBoolNumberElement + " ");
}
document.write(`<hr>`);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до
// конкретного індексу. Вивести в консоль
let arrayEmpty = [];

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}
function lengthRandom() {
    return Math.round(Math.random() * 50);
}

for (let i = 0; i < lengthRandom(); i++) {
    arrayEmpty[i] = getRandomNumber();
}

for (const arrayEmptyElement of arrayEmpty) {
    document.write(arrayEmptyElement + " ");
}
document.write(`<hr>`);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let arrayNum = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0;
while (i < arrayNum.length){
    document.write(`${arrayNum[i]} `);
    i++
}
document.write(`<hr>`);

// 2. перебрати його циклом for

for (let j = 0; j < arrayNum.length; j++) {
    document.write(`${arrayNum[j]} `);
}
document.write(`<hr>`);

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let k = 0;
while (k < arrayNum.length){
    if (arrayNum[k] % 2 !== 0) {
        document.write(`${arrayNum[k]} `);
    }
    k++
}
document.write(`<hr>`);
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (const number of arrayNum) {
    if (number % 2 !== 0) {
        document.write(`${number} `);
    }
}
document.write(`<hr>`);

// 5. перебрати циклом while та вивести числа тільки парні значення

let l = 0;
while (l < arrayNum.length){
    if (arrayNum[l] % 2 === 0) {
        document.write(`${arrayNum[l]} `);
    }
    l++
}
document.write(`<hr>`);

// 6. перебрати циклом for та вивести числа тільки парні значення

for (const number of arrayNum) {
    if (number % 2 === 0) {
        document.write(`${number} `);
    }
}
document.write(`<hr>`);

// 7. замінити кожне число кратне 3 на слово "okten"

for (let j = 0; j < arrayNum.length; j++) {
    if (arrayNum[j] % 3 === 0){
        arrayNum[j] = `okten`;
    }
    document.write(`${arrayNum[j]} `);
}
document.write(`<hr>`);

// 8. вивести масив в зворотньому порядку.
let arrayNumTwo = [2,17,13,6,22,31,45,66,100,-18];

for (let j = arrayNumTwo.length - 1; j >= 0; j--) {
    document.write(`${arrayNumTwo[j]} `);
}
document.write(`<hr>`);

// 9. всі попередні завдання (окрім 8), але, в зворотному циклі (с заду на перед)

for (let j = arrayNumTwo.length - 1; j >= 0; j--) {
    if (arrayNum[j] % 3 === 0){
        arrayNum[j] = `okten`;
    }
    document.write(`${arrayNum[j]} `);
}
document.write(`<hr>`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getRandomString(len) {
    let chrs = 'abcdefghikmlonpsqwyxzABDEFGHKMNPQRSTWXZ';
    let str = '';
    for (let i = 0; i < len; i++) {
        let pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrayTenElemNumber = [];
for (let j = 0; j < 10; j++) {
    arrayTenElemNumber[j] = getRandomNumber();
}
for (const arrayTenElemNumberElement of arrayTenElemNumber) {
    document.write(`${arrayTenElemNumberElement} `)
}
document.write(`<hr>`);

// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let arrayTenElemString = [];

for (let j = 0; j < 10; j++) {
    arrayTenElemString[j] = getRandomString(8);
}
for (const arrayTenElemStringElement of arrayTenElemString) {
    document.write(`"${arrayTenElemStringElement}" `)
}
document.write(`<hr>`);

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrayAllType = [];

for (let j = 0; j < 10; j++) {
    arrayAllType[j] = j % 2 === 0 ? getRandomNumber(): getRandomString(8);
}
for (const arrayAllTypeElement of arrayAllType) {
    document.write(`"${arrayAllTypeElement}" `);
}
document.write(`<hr>`);

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи

let arrayTypeRundom = [12, `Number`, true, 35, `Yes or Not`, -255, false, 91, `okten`, 56];

for (const arrayTypeRundomElement of arrayTypeRundom) {
    if (typeof arrayTypeRundomElement === "boolean"){
        document.write(`${arrayTypeRundomElement} `);
    }
}

document.write(`<hr>`);
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи

for (const arrayTypeRundomElement of arrayTypeRundom) {
    if (typeof arrayTypeRundomElement === "number"){
        document.write(`${arrayTypeRundomElement} `);
    }
}

document.write(`<hr>`);

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи

for (const arrayTypeRundomElement of arrayTypeRundom) {
    if (typeof arrayTypeRundomElement === "string"){
        document.write(`${arrayTypeRundomElement} `);
    }
}

document.write(`<hr>`);

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrayNewType = [];

for (let j = 0; j < 10; j++) {
    arrayNewType[j] = j % 2 === 0 ? getRandomNumber(): getRandomString(8);
}
for (const arrayAllTypeElement of arrayNewType) {
    document.write(`"${arrayAllTypeElement}" `);
}
document.write(`<hr>`);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(j + " ");
}

document.write(`<hr>`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(j + " ");
}

document.write(`<hr>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j += 2) {
    console.log(j);
    document.write(j + " ");
}

document.write(`<hr>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(j + " ");
    }
}

document.write(`<hr>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let j = 0; j < 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(j + " ");
    }
}

document.write(`<hr>`);

//
//
//
//  створити масив книжок (назва, кількість сторінок, автори , жанри).

let arrayBook = [
    {
        name: `Философия Java`,
        numberPages: 658,
        author: [`Брюс Эккель`],
        genre: [`Классика Computer Science`, `Java`, `Программирование`]
    },
    {
        name: `Совершенный код. Мастер-класс`,
        numberPages: 722,
        author: [`С. Макконнелл`],
        genre: [`Программирование`]
    },
    {
        name: `97 этюдов для архитекторов программных систем`,
        numberPages: 678,
        author: [`Нил Форд`, `Найгард М.`, `Де Ора Б.`],
        genre: [`Интернет-бизнес`, `Профессионально`]
    },
    {
        name: `Head First Java, 2nd Edition`,
        numberPages: 580,
        author: [`Кэтти Сьерра`, `Берт Бейтс`],
        genre: [`Head First`]
    },
    {
        name: `Head First Design Patterns`,
        numberPages: 796,
        author: [`Эрик Фримен`, `Кэтти Сьерра`, `Берт Бейтс`, `Элизабет Фримен`],
        genre: [`Классика Computer Science`, `Программирование`]
    }
]

for (const arrayBookElement of arrayBook) {
    document.write(`Name: ${arrayBookElement.name}. NumberPages: ${arrayBookElement.numberPages}. Author: 
                          ${arrayBookElement.author}. Genre: ${arrayBookElement.genre} <br>`);
}

document.write(`<hr>`);

// - знайти найбільшу книжку.

let max = 0;
let nameBookMax = 0;

for (let j = 0; j < arrayBook.length; j++) {

    if (arrayBook[j].numberPages > max) {
        max = arrayBook[j].numberPages;
        nameBookMax = arrayBook[j].name;
    }
}

document.write(`Нибольшая книга: ${nameBookMax} -- ${max}`);

document.write(`<hr>`);

// - знайти книжку/ки з найбільшою кількістю жанрів

let bookMaxGenre = 0;
let bookMaxGenreName = 0;

for (let j = 0; j < arrayBook.length; j++) {
        if (arrayBook[j].genre.length > bookMaxGenre) {
            bookMaxGenre = arrayBook[j].genre.length;
            bookMaxGenreName = arrayBook[j].name;
        }
}

document.write(`Книжка з найбільшою кількістю жанрів: ${bookMaxGenreName}`);
document.write(`<hr>`);

// - знайти книжку/ки з найдовшою назвою

let bookMaxName = 0;
let bookMaxNameTitle = 0;

for (let j = 0; j < arrayBook.length; j++) {
    if (arrayBook[j].name.length > bookMaxName) {
        bookMaxName = arrayBook[j].name.length;
        bookMaxNameTitle = arrayBook[j].name;
    }
}

document.write(`Книжка з найдовшою назвою: ${bookMaxNameTitle}`);
document.write(`<hr>`);

// - знайти книжку/ки які писали 2 автори

let bookMaxAuthor = 2;
let bookMaxAuthorName = 0;

for (let j = 0; j < arrayBook.length; j++) {
    if (arrayBook[j].author.length === bookMaxAuthor) {
        bookMaxAuthorName = arrayBook[j].name;
        document.write(`Книжка яку писали 2 автори: ${bookMaxAuthorName}`);
    }
}

document.write(`<hr>`);

// - знайти книжку/ки які писав 1 автор

let bookMaxAuthorOne = 1;
let bookMaxAuthorOneName = 0;

for (let j = 0; j < arrayBook.length; j++) {
    if (arrayBook[j].author.length <= bookMaxAuthorOne) {
        bookMaxAuthorOneName = arrayBook[j].name;
        document.write(`Книжка яку писав 1 автор: ${bookMaxAuthorOneName} <br>`);
    }
}
document.write(`<hr>`);