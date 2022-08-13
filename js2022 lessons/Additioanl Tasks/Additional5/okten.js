//
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numberMin = (a, b, c) => (a < b && a < c) ? a: ((b < c) ? b: c);

document.write(numberMin(15, 5, -96));
document.write(`<hr>`);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numberMax = (a, b, c) => (a > b && a > c) ? a: ((b > c) ? b: c);

document.write(numberMax(15, 50, -6));
document.write(`<hr>`);

// - створити функцію яка повертає найбільше число з масиву

let array = [1, 3, -9, 8, 12, -2, 0, 5];
let elemMax = 0;

let arrayMax = (array) => {
    for (const arrayElement of array) {
       elemMax < arrayElement ? elemMax = arrayElement: '' ;
    }
    return elemMax;
}

document.write(arrayMax(array));
document.write(`<hr>`);

// - створити функцію яка повертає найменьше число з масиву

let elemMin = 0;

let arrayMin = (array) => {
    for (const arrayElement of array) {
        elemMin > arrayElement ? elemMin = arrayElement: '' ;
    }
    return elemMin;
}

document.write(arrayMin(array));
document.write(`<hr>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

let sumArray = 0;

let arraySum = (array) => {
    for (const arrayElement of array) {
        sumArray += arrayElement;
    }
    return sumArray;
}
document.write(arraySum(array));
document.write(`<hr>`);

// - Дано натуральное число n. Выведите все числа от 1 до n.

let printNaturalNumber = (number) => {
    for (let i = 0; i <= number; i++) {
        document.write(`${i} `);
    }
}
printNaturalNumber(15);
document.write(`<hr>`);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let printNumberAB = (a, b) => {
    if (a < b) {
        for (a; a <= b; a++) {
            document.write(`${a} `);
        }
    } else {
        for (a; a >= b; a--) {
            document.write(`${a} `);
        }
    }
}

printNumberAB(16, 20);
document.write(`<hr>`);

// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arrayNumber = [9,8,0,4];
let indexOld = 0, indexNew = 0;

let printArrayNewIndex = (array, i) => {
    indexOld = array[i];
    indexNew = array[i+1];
    for (let j = 0; j < array.length; j++) {
        if (j === i) {
            array[j] = indexNew;
            array[j+1] = indexOld;
        }
    }
    return array;
}

document.write("[ " + printArrayNewIndex(arrayNumber, 1) + " ]");
document.write(`<hr>`);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arrayNumberOne = [1,0,6,0,3];
let arrayNumberTwo = [1,2,3,4,0];
let arrayNumberThree = [1,0,0,0];

let arraySortByNull = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            array.push(0);
        }
    }
}

arraySortByNull(arrayNumberOne);
for (const arrayNumberOneElement of arrayNumberOne) {
    document.write(`${arrayNumberOneElement} `);
}
document.write(`<hr>`);

arraySortByNull(arrayNumberTwo);
for (const arrayNumberOneElement of arrayNumberTwo) {
    document.write(`${arrayNumberOneElement} `);
}
document.write(`<hr>`);

arraySortByNull(arrayNumberThree);
for (const arrayNumberOneElement of arrayNumberThree) {
    document.write(`${arrayNumberOneElement} `);
}
document.write(`<hr>`);