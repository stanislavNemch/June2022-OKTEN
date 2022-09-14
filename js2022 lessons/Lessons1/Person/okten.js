//Person

let firstName = 'Nemchenko';
let middleName = 'Stanislav';
let lastName = 'Viktorovich';

let person = `${firstName} ${middleName} ${lastName}`;
let personTwo = "ПІБ: " + firstName + " " + middleName +
                " " + lastName;

console.log(person);
console.log(personTwo);

let text = document.getElementById("text");
text.innerHTML = (person);

document.write("<h3>" + personTwo + "</h3>");

alert(person);
