//TypeOf function

let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let text = document.getElementById("text");
text.innerHTML = ("a is typeof: " + (typeof a) + ". b is typeof: "
                    + (typeof b) + ". c is typeof: " + (typeof c));

let result = (`a is typeof: ${typeof a}. b is typeof: ${typeof b}.
                c is typeof: ${typeof c}`);
document.write("<h3>" + result + "</h3>");

alert("a is typeof: " + typeof a);
alert("b is typeof: " + typeof b);
alert("c is typeof: " + typeof c);