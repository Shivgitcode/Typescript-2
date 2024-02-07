"use strict";
let num1 = "hello world";
let num2 = 10;
let num3 = true;
function sum(x, y) {
    return x + y;
}
let location1 = {
    x: 4.5,
    y: 3.5,
};
// console.log(location1)
let players = [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Pepe",
    "Lewandowski",
    "Ronaldinho",
    "Kevin de Bruyne",
];
players.forEach((el) => {
    console.log(el.toUpperCase());
});
let p1 = { name: "football", price: 500 };
let student = {
    name: "shivansh",
    degree: "B.tech",
};
function getParticularString(name) {
    return { first: name.first.slice(0, 2), last: name.first.slice(0, 2) };
}
console.log(getParticularString({ first: "shivansh", last: "Aggarwal" }));
let name2 = "shivansh";
name2 = "tanishka";
let p2 = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
];
function getSomething(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x + 2;
}
console.log(getSomething("shivansh"));
// console.log(yo)
console.log(getSomething(300));
