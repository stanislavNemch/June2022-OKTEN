// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.className = "member";

    let h2 = document.createElement('h2');
    h2.innerText = simpson.name + ' ' + simpson.surname;

    let h4 = document.createElement('h4');
    h4.innerText = "Возраст" + `:` + simpson.age;

    let p = document.createElement('p');
    p.innerText = simpson.info;

    let img = document.createElement('img');
    img.src = simpson.photo;

    div.append(h2,h4,p,img);

    document.body.appendChild(div);
}
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesArrayElement of coursesArray) {
    let divCoursesArray = document.createElement('div');
    divCoursesArray.className = "body_div";

    let divTop = document.createElement('div');
    divTop.className = "top_div";
    divTop.innerText = coursesArrayElement.title;

    divCoursesArray.append(divTop);

    let mediumDiv = document.createElement('div');
    mediumDiv.className = "medium_div";

    let mediumDivOne = document.createElement('div');
    mediumDivOne.className = "medium_div_one";
    mediumDivOne.innerText = coursesArrayElement.monthDuration;

    mediumDiv.append(mediumDivOne);

    let mediumDivTwo = document.createElement('div');
    mediumDivTwo.className = "medium_div_two";
    mediumDivTwo.innerText = coursesArrayElement.hourDuration;

    mediumDiv.append(mediumDivTwo);

    divCoursesArray.append(mediumDiv);

    let bottomDiv = document.createElement('div');
    bottomDiv.className = "bottom_div";

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.innerText = coursesArrayElement.modules[i];

        bottomDiv.append(div);
    }

    let bottomUl = document.createElement('ul');

    for (let i = 3; i < coursesArrayElement.modules.length; i++) {

        let bottomLi = document.createElement('li');
        bottomLi.innerText = coursesArrayElement.modules[i];
        bottomUl.append(bottomLi);
    }

    bottomDiv.append(bottomUl);

    divCoursesArray.append(bottomDiv);

    document.body.appendChild(divCoursesArray, mediumDiv, bottomDiv);
}

//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------


// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divBase = document.createElement('div');
divBase.className = "div_base";

    let divWrap = document.createElement('div');
    divWrap.className = "wrap";

divBase.append(divWrap);

    let divCollapse = document.createElement('div');
    divCollapse.className = "collapse";

divBase.append(divCollapse);

    let divAlpha = document.createElement('div');
    divAlpha.className = "alpha";

divBase.append(divAlpha);

    let divBeta = document.createElement('div');
    divBeta.className = "beta";

divBase.append(divBeta);

document.body.appendChild(divBase);

let clone = divBase.cloneNode(true);
document.body.appendChild(clone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arrayThree = ['Main','Products','About us','Contacts'];

let container = document.querySelector(".menu");

for (const string of arrayThree) {
    let liArray = document.createElement("li");
    liArray.textContent = `${string}`;
    container.append(liArray);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const durationArrayElement of coursesAndDurationArray) {

    let divCoAndDurAr = document.createElement('div');
    divCoAndDurAr.className = "div_coanddurar";

        let divTitle = document.createElement('div');
        divTitle.innerText = `${durationArrayElement.title}`;

    divCoAndDurAr.append(divTitle);

        let divMonthDuration = document.createElement('div');
        divMonthDuration.innerText = `${durationArrayElement.monthDuration}`;

    divCoAndDurAr.append(divMonthDuration);
    document.body.appendChild(divCoAndDurAr);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> , в якому буде
// <h1 class='heading'> з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const durationArrayElement of coursesAndDurationArray) {

    let divCoAndDurAr = document.createElement('div');
    divCoAndDurAr.className = "item";

    let h1 = document.createElement('h1');
    h1.className = "heading";
    h1.innerText = `${durationArrayElement.title}`;

    divCoAndDurAr.append(h1);

    let p = document.createElement('p');
    p.className = "description";
    p.innerText = `${durationArrayElement.monthDuration}`;

    divCoAndDurAr.append(p);
    document.body.appendChild(divCoAndDurAr);
}

// - Створити довільний елемент з id = text. Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".

let target = document.querySelector('#button1');
let targetDel = document.querySelector('#text');

target.onclick = function () {
    targetDel.remove(targetDel);
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи меньше він ніж 18, та повідомити про це користувача

let age = 0;
let targetText = document.querySelector('#text');

function getAge() {

    age = document.getElementById("age").value;

    if (age < 18) {
        targetText.innerText = `Ви ще неповнолітній: ${age}`;
        // alert(`Ви ще неповнолітній: ${age}`);
    } else {
        targetText.innerText = 'Вам більше 18 років!';
        // alert('Вам більше 18 років!');
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)

let divInputTable = document.createElement('div');
divInputTable.className = "input_table";


let divTableTh = document.createElement('div');
let inputTh = document.createElement('input');
inputTh.id = "input_th";

    divTableTh.append(inputTh);
    divInputTable.append(divTableTh);

let divTableTr = document.createElement('div');
let inputTr= document.createElement('input');
inputTr.id = "input_tr";

    divTableTr.append(inputTr);
    divInputTable.append(divTableTr);

let divTableText = document.createElement('div');
let divInputText = document.createElement('input');
divInputText.id = "input_text";

    divTableText.append(divInputText);
    divInputTable.append(divTableText);

let divTableBottom = document.createElement('div');
let divInputBottom = document.createElement("button");
divInputBottom.setAttribute("onclick", "createTable()");
divInputBottom.innerText = "Збудувати таблицю";

    divTableBottom.append(divInputBottom);
    divInputTable.append(divTableBottom);

document.body.appendChild(divInputTable);

let divResultTable = document.createElement('table');
divResultTable.className = "table";

function createTable() {
    // divResultTable.innerText = `${this.input_th.value}---${this.input_tr.value}---${this.input_text.value}`;

    for (let i = 0; i < (this.input_tr.value); i++) {
        let trTableBottom = document.createElement('tr');
        for (let j = 0; j < (this.input_th.value); j++) {
            let thTableBottom = document.createElement('th');
            thTableBottom.innerText = `${this.input_text.value}`;
            trTableBottom.append(thTableBottom);
        }
        divResultTable.append(trTableBottom);
    }
}

document.body.appendChild(divResultTable);