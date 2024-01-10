"use strict";
// type Dog = {
//   name: string;
//   breed: string;
//   age: number;
// };
// const dog: Dog = {
//   name: "tony",
//   breed: "shepherd",
//   age: 3,
// };
// function printSomething(num: string | number): string | number {
//   return num
// }
// console.log(printSomething("hello"))
function printSomething(num) {
    return num;
}
const num = [];
const names = [];
// const input = document.querySelector<HTMLInputElement>("#name")!;
const input = document.getElementById("name");
input.value = "shivansh";
// printSomething("shivansh");
// printSomething(3);
// const arr1 = printSomething([1, 2, 3]);
// console.log(arr1);
function printElement(element) {
    return element;
}
function printCollection(element) {
    return element;
}
const hello = ["shivansh", "aggarwal"];
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), { object2 });
}
console.log(printElement(3));
console.log(printElement("shivansh"));
console.log(printElement({ name: "silky", color: "red" }));
console.log(printCollection(["shivansh", "Aggarwal"]));
console.log(printCollection([2, 3]));
console.log(printCollection([true, false]));
console.log(printCollection(["hello", "bruhh"]));
console.log(printCollection([3412, 32323]));
console.log(merge(["colt", 21], [3, 4]));
function makeAnEmptyArray() {
    return [];
}
const arr = makeAnEmptyArray();
