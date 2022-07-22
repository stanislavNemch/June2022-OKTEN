//Prompt function.

let firstName = prompt("Введите Вашу фамилию:");
let middleName = prompt("Введите Ваше имя:");
let age = +prompt("Введите Ваш возраст:");

let result = (`Ваша фамилия: ${firstName}. Ваше имя: ${middleName}.
                Ваш возраст: ${age}`);

console.log(typeof result);

let text = document.getElementById("text");
text.innerHTML = (result);

document.write("<h3>" + result + "</h3>");

alert(result);