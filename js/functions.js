'use strict';
// Function    -   instructions that performs a task

// function sayHello() {
//     console.log("Hello!");
// }

console.log("Start of program");
sayHello();
// above calls function

// console.log(sayHello());
console.log("End of program");


// function sayHello() {
//     return "Hello!";
// }

// console.log("start");
// let result  =   sayHello();
// console.log(result);
// console.log("end");



function message() {
    return "Good morning"
}
console.log(message());


function sayHello(name, surname) {
    let message = "Hello," + name + surname + "!";
    return  message;
}

console.log(sayHello(" Incredible", " Bulk"));


// note the \n that acts as linebreaker
let     msg         =       String("Hello there, \nJavascript isnt Java.".length);
let     animal      =       ["Gorilla", "Elepahnt", "Nugget"];
let     upCase      =       animal[0].toUpperCase(animal);
let     lowCase     =       animal[1].toLowerCase(animal);


// console.log(animal);
console.log(animal  === "Gorilla");
console.log(upCase);
console.log(lowCase);

console.log(animal[2]);

