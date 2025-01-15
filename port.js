// IF ELSE STATMENTS

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "light") {
//     color = "white";
// }
// else if (mode === "pinked") {
//     color = "pink";
// }
// else {
//     color = "red";

// }

// if (mode === "light") {
//     console.log(mode);
// }

// console.log(color);


// IF ELSE IN EASY WAY

// let age = 18;

// age >= 18 ? console.log("adult") : console.log("not adult");

// POPUP

// alert ("fuck you");

// FIND THE MULTIPLE OF 5 = X % 5 ;
// 5==0 = X IS MULTIPLE OF 5;

// let num = prompt("enter number");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// }
// else {
//     console.log(num, "is not multiple of 5");
// }

// GRADES USING IF ELSE

// let marks = prompt("enter marks");

// if (marks < 0 || marks > 100) {
//     console.log(marks,"invelid marks (0-100)");
// }
// else if (marks >= 80) {
//     console.log(marks, "A");
// }
// else if (marks >= 70) {
//     console.log(marks,"B");
// }
// else if (marks >= 60) {
//     console.log(marks, "C");
// }
// else if (marks >= 50) {
//     console.log(marks,"D");
// }
// else {
//     console.log(marks, "F");
// }

// SWITCH FUNCTION

// let choose = prompt(0);

// switch(choose) {
//     case '1' : console.log("tehseen 1");
//              break;
//     case '2' : console.log("tehseen 2");
//              break;
//     case '3' : console.log("tehseen 3");
//              break;
//     case '4' : console.log("tehseen 4");
//              break;
//     case '5': console.log("tehseen 5");
//              break;
//     case '6': console.log("tehseen 6");
//              break;
//     case '7': console.log("tehseen 7");
//              break;
//     case '8': console.log("tehseen 8");
//              break;
//     case '9': console.log("tehseen 9");
//              break;
//     case '10' : console.log("tehseen 10");
//              break;
// };

// "FOR" LOOP

// for(let i = 1; i<=10; i++) {
//     console.log("tehseen");
// };

// "WHILE" LOOP = REVERSE NATURAL NUMERS

// let i = 10;

// while (i >= 1) {
//     i--;
//     console.log("i = ", i);
// }

// console.log(i);

// SAME MULTIPLE COLUMS

// let jav = "i love you";

// for (let i of jav) {
//     console.log(i, i, i);
// }

// let javeed = {
//     Name: "tehseen",
//     age: 18,
//     cgpa: 7.6,
//     ispass: true
// };

// for (let j in javeed) {             // j variable will be access all key, `javeed is object`, `[j] is keys`
//     console.log(j, javeed[j]);      //  javeed[j] writing like this means we are calling all keys values
// }

// PRACTICE CLASS 3 Q 1 = EXAMPLE 1
// EVEN, ODD USING IF IN FOR;

// for (let i=0; i<=100; i++) {
//     if (i % 2 === 0) {
//     console.log(i);
//     }
// }

// PRACTICE CLASS 3 Q 1 = EXAMPLE 2


// let i=0;

// while(i<=100) {
//     console.log(i);
//     i++;
// };

// PRACTICE CLASS 3 Q 1 = EXAMPLE 3

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while(i<=100);

// PRACTICE CLASS 3 Q 1 = EXAMPLE 4


// STRINGS

// let str = "TEHSEEN";
// console.log(str);
// console.log(str.length);
// console.log(str[4]);

// DIFFERENCE BETWEEN = ("  ");   ` `;

// let object = {
//     item: "pen",
//     price: 5
// }
// console.log("the item ", object.item, "price is ", object.price);

// let output = `the cost of ${object.item} is \n \t ${object.price} rupees`;
// console.log(output);

// let teh = "javeed";
// console.log(teh.slice(0, 3));

// let str1 = "tehseen";
// let str2 = "javeed";

// EXAMPLE 1;
// let result = str1.concat(str2);
// console.log(result);

// EXAMPLE 2
// let result = str1 + str2;
// console.log(result);

// ADITIONAL EX
// let result = "dream name" + str1 + str2;
// console.log(result);

// REPLACE IN STRING

// let str = "javeed";
// console.log(str.replace("j", "t"));

// PRACTICE CLASS 3 Q 2

// let user = prompt("enter your full name");
// let res = "@"+ user + 0 + user.length;
// console.log(res)

// Array

// let marks = [90, 40,50,34,54,56,656,];
// console.log(marks);
// console.log(marks.length);

// let heros = ["ironman", "spideman", "captanam", "Dr.Strange", "thor"];
// console.log(heros)
// console.log(heros.length);

// FINDER

// console.log(heros[3], heros[4]);

// REPLACE IN ARRAY

// heros[1] = "doddi";
// console.log(heros)

// STRING IS A IMMUTABLE && ARRAY IS A MUTABLE

// ARRAY LOOP TO WRITE IT IN COLUM (FOR LOOP)

// let heros = ["ironman", "spideman", "captanam", "Dr.Strange", "thor"];

// for(let t=0; t<heros.length; t++) {
//     console.log( heros[t]);
// }

// ARRAY LOOP TO WRITE IT IN COLUM (WHILE LOOP)

// let heros = ["ironman", "spideman", "captanam", "Dr.Strange", "thor"];
// let t=0;

// while (t<heros.length) {
//     console.log(heros[t]);
//     t++;
// }

// ARRAY LOOP TO WRITE IT IN COLUM (DO WHILE LOOP)

// let heros = ["ironman", "spideman", "captanam", "Dr.Strange", "thor"];
// let t= 0;

// do {
//     console.log(heros[t]);
//     t++;
// } while(t>heros.length);

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / 6;
// console.log(`the avg marks of class = ${avg}`);

// let items = [250, 645, 300, 900, 50];
// let offer;

// for (let i = 0; i < items.length; i++) {
//     offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(items[i]);
// }
// console.log(items);

// ex2

// let i = 0;
// let offer;

// for (let val of items) {
//     offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`values after offer =  ${items[i]}`);
//     i++;
// }

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
