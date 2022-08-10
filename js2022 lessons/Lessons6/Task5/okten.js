// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

function printArrayLength (array) {
    document.write(array.length + ' ');
}

let arrayTextOne = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (const string of arrayTextOne) {
    printArrayLength(string);
}
document.write(`<hr>`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arrayTextTwo = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (let i = 0; i < arrayTextTwo.length; i++) {
    const arrayElement = arrayTextTwo[i].toUpperCase();
    document.write(arrayElement + `<br>`);
}
document.write(`<hr>`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arrayTextThree = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

for (let i = 0; i < arrayTextThree.length; i++) {
    const arrayElement = arrayTextThree[i].toLowerCase();
    document.write(arrayElement + `<br>`);
}
document.write(`<hr>`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

str.slice(1, 13);

document.write(str);
document.write(`<hr>`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stri = 'Ревуть воли як ясла повні';

function stringToarray(str, separator) {
    return str.split(separator);
}

let arr = stringToarray(stri, ` `);

for (const arrElement of arr) {
    document.write(`${arrElement} `);
}
document.write(`<hr>`);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити
// всі об'єкти в масиві на стрінгові.

let arrayNumber = [10,8,-7,55,987,-1011,0,1050,0];

let arrayNumberToString = arrayNumber.map((value) => value.toString());

arrayNumberToString.forEach(value => document.write((typeof value) + " = " + value + "<br>"));

document.write(`<hr>`);
// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums (nums, str){
    if (str === 'ascending'){
        nums.sort(function(a, b) {
            return a - b;
        });
    } else if (str === 'descending'){
        nums.sort(function(a, b) {
            return b - a;
        });
    }
}
sortNums(nums,`ascending`);
document.write(`${nums}`);
document.write(`<hr>`);
sortNums(nums,`descending`);
document.write(`${nums}`);
document.write(`<hr>`);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => {
return b.monthDuration - a.monthDuration});
coursesAndDurationArray.forEach(value => document.write(value.title + value.monthDuration + "<br>"));
document.write(`<hr>`);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function filter(array, predicateFn) {
    let filterArr = [];
    for (const item of array) {
        if (predicateFn(item)) {
            filterArr.push(item);
        }
    }
    return filterArr;
}

let filterArr = filter(coursesAndDurationArray, (item) => item.monthDuration > 5);

filterArr.forEach(value => document.write(value.title + value.monthDuration + "<br>"));
document.write(`<hr>`);


// Я в карты честно не играл и незнаю масти, если дадите готовый массив, то обработаю :)
// играл за всю жизнь только в UNO :)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spade:[],
//         diamond:[],
//     heart:[],
//     club:[]
// }
