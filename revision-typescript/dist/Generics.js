"use strict";
// aam zindagi
function printString(name) {
    return name;
}
function printNum(num) {
    return num;
}
printString("shivansh");
printNum(34);
// mentos zindagi
function printData(data) {
    console.log(data);
}
printData("shivansh");
printData(34332);
// printData([1,2,5,6])
function printCollection(data) {
    return data;
}
console.log(printCollection(["shivansh", "aggarwal"]));
function allCollection(arr1, arr2) {
    //   console.log(arr1);
    //   console.log(arr2);
    return Object.assign(Object.assign({}, arr1), arr2);
}
console.log(allCollection(["shivansh", "aggarwal"], { team: "Al Nassar", shirtNo: 7 }));
function printArray() {
    return [];
}
const myarr = printArray();
myarr.push("shivansh");
