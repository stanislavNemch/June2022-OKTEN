// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let evenArray = [];

for (let i = 0, j = 0; i < 50; i++) {
    j += 2;
    evenArray[i] = j;
}

for (const evenArrayElement of evenArray) {
    document.write(`${evenArrayElement} `);
}
document.write(`<hr>`);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let unevenArray = [];

for (let i = 0, j = -1; i < 50; i++) {
    j += 2;
    unevenArray[i] = j;
}

for (const unevenArrayElement of unevenArray) {
    document.write(`${unevenArrayElement} `);
}
document.write(`<hr>`);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//________________________________________________________________________________
function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

function getRandomNumberRange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//_______________________________________________________________________________

let randomArrayNumber = [];

for (let i = 0; i < 20; i++) {
    randomArrayNumber[i] = getRandomNumber();
}

for (const randomArrayNumberElement of randomArrayNumber) {
    document.write(`${randomArrayNumberElement} `);
}
document.write(`<hr>`);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let randomArrayNumberRange = [];
document.write(`Заповнити масив чисалами в діапазоні від 8 до 732: `);
for (let i = 0; i < 20; i++) {
        randomArrayNumberRange[i] = getRandomNumberRange(8, 732);
    }

for (const randomArrayNumberRangeElement of randomArrayNumberRange) {
    document.write(`${randomArrayNumberRangeElement} `);
}
document.write(`<hr>`);

// 2. Вивести за допомогою console.log кожен третій елемен
document.write(`Кожен третій елемен массиву: `);
for (let i = 0; i < randomArrayNumberRange.length; i += 3) {
    document.write(`${randomArrayNumberRange[i]} `);
    console.log(`${randomArrayNumberRange[i]}`);
}
document.write(`<hr>`);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

document.write(`Кожен третій елемен массиву тільки якщо цей елемент є парним: `);
for (let i = 0; i < randomArrayNumberRange.length; i += 3) {
    if (randomArrayNumberRange[i] % 2 === 0) {
        document.write(`${randomArrayNumberRange[i]} `);
        console.log(`${randomArrayNumberRange[i]}`);
    }
}
document.write(`<hr>`);

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент
// є парним та записати їх в новий масив

let newRandomArrayNumber = [];

document.write(`Кожен третій елемен массиву тільки якщо цей елемент є парним
                та записати їх в новий масив: `);
for (let i = 0, j = 0; i < randomArrayNumberRange.length; i += 3) {
    if (randomArrayNumberRange[i] % 2 === 0) {
            newRandomArrayNumber[j] = randomArrayNumberRange[i];
            j++;
    }
}

for (const newRandomArrayNumberElement of newRandomArrayNumber) {
    document.write(`${newRandomArrayNumberElement} `);
    console.log(`${newRandomArrayNumberElement}`);
}

document.write(`<hr>`);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrayExample = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

document.write(`EXAMPLE: `);
for (const number of arrayExample) {
    document.write(`${number} `);
}
document.write(`<hr>`);

document.write(`Вивести кожен елемент масиву, сусід справа якого є парним: `);
for (let i = 0; i < arrayExample.length; i++) {
    if (arrayExample[i] % 2 === 0) {
        document.write(`${arrayExample[i - 1]} `);
        console.log(`${arrayExample[i - 1]}`);
    }
}
document.write(`<hr>`);

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують
// вартість окремої покупки. Обрахувати середній чек.

let arrayNumberSix = [100,250,50,168,120,345,188];
document.write(`EXAMPLE: `);
for (const arrayNumberSix1 of arrayNumberSix) {
    document.write(`${arrayNumberSix1} `);
}
document.write(`<hr>`);
document.write(`Є масив з числами, Які характеризують вартість окремої покупки. Обрахувати середній чек: `);

let arrayNumberSixLength = arrayNumberSix.length;

let averageCheck;
let sumCheck = 0;

for (const arrayNumberSix1 of arrayNumberSix) {
    sumCheck += arrayNumberSix1;
}

averageCheck = sumCheck / arrayNumberSixLength;
document.write(`${Math.round(averageCheck)}`);
document.write(`<hr>`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

document.write(`Створити масив з рандомними значеннями, помножити всі його елементи на 
                  5 та перемістити їх в інший масив: `);

let arrayRandomNumberSeven = [];
let newArrayRandomNumberSeven = [];

for (let i = 0; i < 10; i++) {
    arrayRandomNumberSeven[i] = getRandomNumber();
    newArrayRandomNumberSeven[i] = (5 * arrayRandomNumberSeven[i]);
}

document.write(`Изначальный массив: <br>`);
for (const arrayRandomNumberSevenElement of arrayRandomNumberSeven) {
    document.write(`${arrayRandomNumberSevenElement} `);
}

document.write(`<br>Новый массив с элементами умноженными на 5: <br>`);
for (const newArrayRandomNumberSevenElement of newArrayRandomNumberSeven) {
    document.write(`${newArrayRandomNumberSevenElement} `);
}
document.write(`<hr>`);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив..

document.write(`8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
                    і якщо елемент є числом - додати його в інший масив..`)

let arrayStringNumber = [true, 123, `blue`, `gold`, 25, false, 16, -259, `end`, 0, -365];
document.write(`<hr>`);

for (const arrayStringNumberElement of arrayStringNumber) {
    document.write(`${arrayStringNumberElement} `);
}

let newArrayNumberEight = [];

for (let i = 0, j = 0; i < arrayStringNumber.length; i++) {
    if (typeof arrayStringNumber[i] === 'number'){
        newArrayNumberEight[j] = arrayStringNumber[i];
        j++;
    }
}
document.write(`<hr>`);

document.write(`8. і якщо елемент є числом - додати його в інший масив: `);

for (const newArrayNumberEightElement of newArrayNumberEight) {
    document.write(`${newArrayNumberEightElement} `);
}
document.write(`<hr>`);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

for (let i = 0, k = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id){
            usersWithCities[k] = {
                id: usersWithId[i].id,
                name: usersWithId[i].name,
                age: usersWithId[i].age,
                status: usersWithId[i].status,
                address: {
                    user_id: citiesWithId[j].user_id,
                    country: citiesWithId[j].country,
                    city: citiesWithId[j].city
                }
            }
            k++;
        }
    }
}

for (const usersWithCity of usersWithCities) {
    document.write(`id: ${usersWithCity.id}<br> name: ${usersWithCity.name}<br> age: ${usersWithCity.age}<br>
                    status: ${usersWithCity.status}<br> user_id: ${usersWithCity.address.user_id}<br>
                    country: ${usersWithCity.address.country}<br> city: ${usersWithCity.address.city}<hr>`);
}

//////////////Не делал, так как выше такаяже аналогия, нет смысла повторяться.
// - Взяти масив з 10 чисел або створити його. Вивести в консоль
// тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/////////////Не делал, так как выше такаяже аналогия, нет смысла повторяться.

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrayMass = [ 'a', 'b', 'c'];
let sumArrayMass = "";

for (let i = 0; i < arrayMass.length; i++) {
    sumArrayMass += arrayMass[i];
}

document.write(`Слово из массива for элементов [ 'a', 'b', 'c']: ${sumArrayMass}`);
document.write(`<hr>`);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arrayMassWhile = [ 'a', 'b', 'c'];
let sumArrayMassWhile = "";
let k = 0;

while (k < arrayMassWhile .length) {
    sumArrayMassWhile += arrayMassWhile[k];
    k++;
}

document.write(`Слово из массива while элементов [ 'a', 'b', 'c']: ${sumArrayMassWhile}`);
document.write(`<hr>`);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arrayMassForOf = [ 'a', 'b', 'c'];
let sumArrayMassForOf= "";

for (const arrayMassForOfElement of arrayMassForOf) {
    sumArrayMassForOf += arrayMassForOfElement;
}

document.write(`Слово из массива for of элементов [ 'a', 'b', 'c']: ${sumArrayMassForOf}`);
document.write(`<hr>`);