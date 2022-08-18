// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {

            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
}

let array = [
    new User(1,`Vasya`,`Vaskin`,`mail@gmail.com`,`06312342160`),
    new User(2,`Vascka`,`Vasckin`,`mailvas@gmail.com`,`06712342161`),
    new User(3,`Pupka`,`Pupkin`,`mailpup@gmail.com`,`06512342162`),
    new User(4,`Gilka`,`Gelkin`,`mailgel@gmail.com`,`06212342165`),
    new User(5,`Hnolka`,`Hnolkin`,`mailhnol@gmail.com`,`09912342170`),
    new User(6,`Popka`,`Popkin`,`mailpop@gmail.com`,`05012342155`),
    new User(7,`Gulka`,`Gulkin`,`mail@gmail.com`,`04412342199`),
    new User(8,`Artem`,`Artemkin`,`mail@gmail.com`,`05012342264`),
    new User(9,`Dimka`,`Dimkin`,`mail@gmail.com`,`06712342964`),
    new User(10,`Slavka`,`Slavkin`,`mail@gmail.com`,`06212342362`),
];

console.log(array);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const evenNumberUserId = array.filter((value) => value.id % 2 === 0);

console.log(evenNumberUserId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortNumberUserId = evenNumberUserId.sort((a, b) => a.id - b.id);

console.log(sortNumberUserId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є
// масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClient = [
    new Client(1,`Vasya`,`Vaskin`,`mail@gmail.com`,`06312342160`,[`ноутбук`, `телевизор`]),
    new Client(2,`Vascka`,`Vasckin`,`mailvas@gmail.com`,`06712342161`,[`ноутбук`, `телевизор`, `пылесос`]),
    new Client(3,`Pupka`,`Pupkin`,`mailpup@gmail.com`,`06512342162`,[`холодильник`]),
    new Client(4,`Gilka`,`Gelkin`,`mailgel@gmail.com`,`06212342165`,[`утюг`, `телевизор`,`ноутбук`]),
    new Client(5,`Hnolka`,`Hnolkin`,`mailhnol@gmail.com`,`09912342170`,[`ноутбук`, `телевизор`, `пылесос`, `утюг`]),
    new Client(6,`Popka`,`Popkin`,`mailpop@gmail.com`,`05012342155`,[`ноутбук`, `телевизор`]),
    new Client(7,`Gulka`,`Gulkin`,`mail@gmail.com`,`04412342199`,[`холодильник`, `телевизор`]),
    new Client(8,`Artem`,`Artemkin`,`mail@gmail.com`,`05012342264`,[`ноутбук`, `утюг`]),
    new Client(9,`Dimka`,`Dimkin`,`mail@gmail.com`,`06712342964`,[`телевизор`]),
    new Client(10,`Slavka`,`Slavkin`,`mail@gmail.com`,`06212342362`,[`ноутбук`, `телевизор`, `пылесос`]),
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

const sortNumberClientOrder = arrayClient.sort((a, b) => a.order.length - b.order.length);

console.log(sortNumberClientOrder);
console.log(`----------------------------------------------------------------------------------`);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function CarUnit(model, manufacturer, year , maxspeed, enginevolume) {

        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolume;

    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);

    this.info = () =>{
        for (const thisKey in this) {
            if (typeof this[thisKey] !== `function`){
                console.log(`${thisKey} - ${this[thisKey]}`)
            }
        }
    };

    this.increaseMaxSpeed = (newSpeed) => this.maxspeed = maxspeed + newSpeed;

    this.changeYear = (newValue) => this.year = newValue;

    this.addDriver = (driver) => this.driver = driver;

}

let car = new CarUnit(`Qashqai`,`Nissan`, 2021, 190, 2.2);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

car.drive();
console.log(`----------------------------------------------------------------------------------`);

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

car.info();
console.log(`----------------------------------------------------------------------------------`);
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

car.increaseMaxSpeed(50);
car.drive();
console.log(`----------------------------------------------------------------------------------`);
// -- changeYear (newValue) - змінює рік випуску на значення newValue

car.changeYear(2020);
car.info();
console.log(`----------------------------------------------------------------------------------`);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

car.addDriver([`Vasya`, `B1`]);
car.info();
console.log(`----------------------------------------------------------------------------------`);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarUnitClass {

    constructor(model, manufacturer, year , maxspeed, enginevolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolume;
    }

    drive = () => console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);

    info = () =>{
        for (const thisKey in this) {
            if (typeof this[thisKey] !== `function`){
                console.log(`${thisKey} - ${this[thisKey]}`)
            }
        }
    };

    increaseMaxSpeed = (newSpeed) => this.maxspeed = this.maxspeed + newSpeed;

    changeYear = (newValue) => this.year = newValue;

    addDriver = (driver) => this.driver = driver;

}
let carUnitClass = new CarUnitClass(`Qashqai`,`Nissan`, 2021, 190, 2.2);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

carUnitClass.drive();
console.log(`----------------------------------------------------------------------------------`);
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

carUnitClass.info();
console.log(`----------------------------------------------------------------------------------`);
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

carUnitClass.increaseMaxSpeed(50);
carUnitClass.drive();
console.log(`----------------------------------------------------------------------------------`);
// -- changeYear (newValue) - змінює рік випуску на значення newValue

carUnitClass.changeYear(2020);
carUnitClass.info();
console.log(`----------------------------------------------------------------------------------`);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

carUnitClass.addDriver([`Vasya`, `B1`]);
carUnitClass.info();
console.log(`----------------------------------------------------------------------------------`);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella = [
    new Cinderella(`Alina-35`, 22, 35),
    new Cinderella(`Alina-34`, 22, 34),
    new Cinderella(`Alina-36`, 22, 36),
    new Cinderella(`Alina-33`, 22, 33),
    new Cinderella(`Alina-32`, 22, 32),
]

class Prince extends Cinderella{

    constructor(name, age, findFootSize) {
        super(name, age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince(`Vasya`, 22, 33);

let find = (array, prince) => {

    for (const arrayElement of array) {
        if (prince.findFootSize === arrayElement.footSize){
            return `My Cinderella is ${arrayElement.name}`;
        }
    }
}

console.log(find(cinderella, prince));

let cinder = cinderella.find(value => prince.findFootSize === value.footSize);

console.log(cinder);