// let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// // "32" => 32
// // "32a" => NaN
// // true => 1; false => 0

// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "saurabh" => true

// let someNumber = 29;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));

/*
    Part one done
*/

// ************************** Operations ******************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(3 + 3);
// console.log(2 - 1);
// console.log(2 * 3);
// console.log(2 ** 3);
// console.log(2 % 1);
// console.log(2 / 3);

let str1 = "Saurabh";
let str2 = " Sinha";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 3 + 2;
console.log(num1, num2, num3);

let counter = 10;
let gameCounter = counter++;
console.log(gameCounter);
gameCounter = ++counter;
console.log(gameCounter);
