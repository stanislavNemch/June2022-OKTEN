// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculatingAreaRectangle(a, b){
    return (a * b);
}

document.write(`Площа прямокутника зі сторонами а = 5 і б = 6: ` + calculatingAreaRectangle(5, 6));
document.write(`<hr>`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculatingAreaCircle(r){
    return (Math.round(Math.PI * Math.pow(r, 2)));
}

document.write(`Площа кола з радіусом r = 6: ` + calculatingAreaCircle( 6));
document.write(`<hr>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calculatingAreaCylinder(h, r){
    return (Math.round(2 * Math.PI * h * r));
}

document.write(`Площа циліндру висотою h = 4, та радіутом r = 6: ` + calculatingAreaCylinder( 4, 6));
document.write(`<hr>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i]}</div>`);
    }
}
let array = [23, 76, 33, 55, 12, -25, 0, 125, -16, 200];

document.write(`Приймає масив та виводить кожен його елемент: `);
printArray(array);
document.write(`<hr>`);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function printParagraph(text){
    document.write(`<p>${text}</p>`);
}

document.write(`Приймає текст та виводить його елемент в параграфі: `);
printParagraph('Text in this block <p>')
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function printUlThreeLi(text){
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

document.write(`Функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий: `);
printUlThreeLi('Text in this block li');
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function printUlBlockLi(text, li){
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

document.write(`Функцію яка створює ul з довільними елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом: `);
printUlBlockLi('Text in this block li', 6);
document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function printArrayPrimitiveElements(array){
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

let arrayPrEl = [true, `error`, 45, false, `next li`, -69];
printArrayPrimitiveElements(arrayPrEl);
document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayObj = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2,name: 'petya', age: 30},
    {id: 3,name: 'kolya', age: 29},
    {id: 4,name: 'olya', age: 28},
    {id: 5,name: 'max', age: 30},
    {id: 6,name: 'anya', age: 31},
    {id: 7,name: 'oleg', age: 28},
    {id: 8,name: 'andrey', age: 36},
    {id: 9,name: 'masha', age: 30},
    {id: 10,name: 'olya', age: 31},
    {id: 11,name: 'max', age: 31}
];

function printArrayObject(arrayObj) {
    for (let i = 0; i < arrayObj.length; i++) {
        document.write(`<ul>`);
        document.write(`<li>Id: ${arrayObj[i].id}</li>`);
        document.write(`<li>Name: ${arrayObj[i].name}</li>`);
        document.write(`<li>Age: ${arrayObj[i].age}</li>`);
        document.write(`</ul>`);
    }
}

printArrayObject(arrayObj);
document.write(`<hr>`);

// - створити функцію яка повертає найменьше число з масиву

// let array = [23, 76, 33, 55, 12, -25, 0, 125, -16, 200];

function minElementArray(array){
    let minElement = Number.MAX_VALUE;
    for (const arrayElement of array) {
        if (arrayElement < minElement){
            minElement = arrayElement;
        }
    }
    return minElement;
}

document.write(`Минимальное значение в массиве array: ` + minElementArray(array));
document.write(`<hr>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let simpleArray = [1, 2 , 3, 14];

function sumArrayElement(array) {
    let sumArray = 0;
    for (const arrayElement of array) {
        sumArray += arrayElement;
    }
    return sumArray;
}

document.write(`Сума значення елементів масиву дорівнює: ` + sumArrayElement(simpleArray));
document.write(`<hr>`);