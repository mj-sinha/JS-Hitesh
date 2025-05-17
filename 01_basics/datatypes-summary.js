// Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.29;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 1223421545594989908n;

// Reference or Non-primitive Datatypes

// Array, Objects, Functions

const heros = ["IronMan", "Thor", "Hulk"];

let testObject = {
    name: "Saurabh",
    age: 33,
    city: "Samastipur"
}
console.log(testObject);

const myFunction = function(){
    console.log("Function Created");   
}

console.log(myFunction());
console.log(typeof myFunction);
