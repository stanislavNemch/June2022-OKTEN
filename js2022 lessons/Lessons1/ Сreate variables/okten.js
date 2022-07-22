//Create variables

let hel = 'hello', owu = 'owu', com = 'com', ua = 'ua',
    one = 1, ten = 10, nine = -999, oneTwoThr = 123,
    pi = 3.14, twoSev =  2.7, sixteen = 16, yes = true,
    no = false;

let result = `${hel}, ${owu}, ${com}, ${ua}, ${one}, ${ten},
              ${nine}, ${oneTwoThr}, ${pi}, ${twoSev}, 
              ${sixteen}, ${yes}, ${no}`;

console.log(result);

let text = document.getElementById("text");
text.innerHTML = (result);

document.write("<h3>" + result + "</h3>");

alert(result);