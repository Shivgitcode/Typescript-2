"use strict";
let num = 124; //"this is number declaration "
// num = 342;
let person = "shivansh"; //this is string type declaration
let list = true; //this is any type declaration
let isPlaying = true; //this is boolean type declaration
//type declaration in functions
function add(num1, num2) {
    //here we are telling the function that the parameter we are passing to you are number
    return num1 + num2;
}
//we can also define the return type of the function . there is a void return type which can't return anything
function concat(st1, st2) {
    console.log(st1 + st2);
}
const num1 = 200;
const num2 = 100;
concat("shivansh ", "aggarwal");
console.log(add(num1, num2));
const score = ["john", "wick"];
score.forEach((el) => {
    return el.toUpperCase();
});
//when there is an unamed function like in the above eg in forEach loop then typescript can infer the types of the parameters by it's own
function someValue() {
    //   console.log("shivansh");
    while (true) {
        console.log("shivansh");
    }
}
// someValue();
// object types in typescript
// const hello={first:"shivansh",last:"aggarwal"} this is  a normal objectt in javascript
// in the above example also typescripts type inference itself declared first and last as string
const hello = {
    first: "shivansh",
    last: "aggarwal",
}; // this is how we can annotate an object in typescript
console.log(hello.first);
// in function
function fullName(person) {
    return `${person.first} ${person.last}`;
}
// this is how we declare parameter types in function of objects
function playerName(player) {
    return player;
}
console.log(playerName({ first: "cristiano", last: "ronaldo" }));
const a1 = { x: 20, y: 30 };
const name2 = "aggarwal";
const dog = {
    name: "Rocky",
    age: 2,
    breed: "shivansh",
};
// type;
// dog.name = "hello"
// array type declaration
// const teams=[] // this is an  any type array which means we can store any type of data inside this storage
const teams = ["manchester united", "manchester city", "real madrid"];
console.log(teams[0]);
const leagues = ["priemer league", "la liga", "serie a"]; // this  is an alternating syntax for declaring array types
const coordinate1 = [
    { x: 3, y: 4 },
    { x: 2, y: 7 },
];
// multidimensional arrays
const cutcross = [
    ["x", "o", "x"],
    ["x", "o", "x"],
    ["x", "o", "x"],
];
console.log("i am inside typescript");
