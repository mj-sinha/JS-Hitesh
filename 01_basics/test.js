let randomVariable = 29;

console.log(typeof randomVariable);
randomVariable = "29a";
console.log(typeof randomVariable);

let anotherVariable = Number(randomVariable);
console.log(typeof Number(randomVariable));
console.log(anotherVariable);
