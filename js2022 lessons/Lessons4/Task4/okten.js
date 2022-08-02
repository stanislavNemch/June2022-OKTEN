// - За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом всередині
document.write(`<div class="task">- За допомогою циклу for і document.write() вивести
                  10 блоків div c довільним текстом всередині </div>`);

document.write(`<hr>`);

for (let i = 0; i < 10; i++) {
    document.write(`<div> 10 блоків div c довільним текстом всередині</div>`);
};

document.write(`<hr>`);

// - За допомогою циклу for і document.write() вивести
// 10 блоків div c довільним текстом і індексом всередині

document.write(`<div class="task">-За допомогою циклу for і document.write() вивести 
10 блоків div c довільним текстом і індексом всередині</div>`);

document.write(`<hr>`);

for (let i = 1; i < 11; i++) {
    document.write(`<div>${i}). 10 блоків div c довільним текстом і індексом всередині</div>`);
};

document.write(`<hr>`);

// - За допомогою циклу while вивести в документ
// 20 блоків h1 c довільним текстом всередині.

document.write(`<div class="task">- За допомогою циклу while вивести в документ 
20 блоків h1 c довільним текстом всередині.</div>`);

document.write(`<hr>`);

let int = 1;

while (int < 21) {
    document.write(`<h1>20 блоків h1 c довільним текстом всередині</h1>`);
    int++;
}

document.write(`<hr>`);

// - За допомогою циклу while вивести в документ
// 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<div class="task">- За допомогою циклу while вивести в документ 
20 блоків h1 c довільним текстом і індексом всередині.</div>`);

document.write(`<hr>`);

let inti = 1;

while (inti < 21) {
    document.write(`<h1>${inti}). 20 блоків h1 c довільним текстом і індексом всередині</h1>`);
    inti++;
}

document.write(`<hr>`);

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb',
//         'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву
// щоб получився цілий список з даними з масиву.

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb',
    'react', 'angular', 'node.js'];

document.write(`<div class="task">- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb',
    'react', 'angular', 'node.js'];

ШАБЛОН:
    <pre><code>&lt;ul&gt;
        &lt;li&gt;ITEM OF ARRAY&lt;/li&gt;
        &lt;!--
            і тд інші об'єкти масиву
             ...
             ...
             ...
        --&gt;
    &lt;/ul&gt;</code></pre>

замість 'ITEM OF ARRAY' підставити елемент з масиву 
щоб получився цілий список з даними з масиву.</div>`);

document.write(`<hr>`);

document.write(`<ul>`);

for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}

document.write(`</ul>`);

document.write(`<hr>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write(`<div class="task"><pre>Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону  Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/
                        Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/
                        61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/
                        tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/
                        YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

ШАБЛОН
<pre><code>&lt;div class=&quot;product-card&quot;&gt;
    &lt;h3 class=&quot;product-title&quot;&gt;TITLE. Price - PRICE&lt;/h3&gt;
&lt;img src=&quot;IMAGE&quot; alt=&quot;&quot; class=&quot;product-image&quot;&gt;
&lt;/div&gt;</code></pre>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту</pre></div>`);

document.write(`<hr>`);

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="product">`);

for (const product of products) {
    document.write(`<div class="product-card">`);
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
    document.write(`<img src="${product.image}" alt="" class="product-image">`);
    document.write(`</div>`);
}

document.write(`</div>`);

document.write(`<hr>`);

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write(`<div class="task"><pre>є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
за допомоги циклу вивести:</pre></div>`);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<div class="task">
- користувачів зі статусом true</div>`);
document.write(`<hr>`);

for (const user of users) {
    if (user.status) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
    }
}

document.write(`<hr>`);
document.write(`<div class="task">
- користувачів зі статусом false</div>`);
document.write(`<hr>`);

for (const user of users) {
    if (!user.status) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
    }
}

document.write(`<hr>`);
document.write(`<div class="task">
- користувачів які старші за 30 років</div>`);
document.write(`<hr>`);

for (const user of users) {
    if (user.age > 30) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
    }
}
document.write(`<hr>`);