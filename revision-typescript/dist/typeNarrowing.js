"use strict";
// typeof guard
function age(a) {
    if (typeof a === "string") {
        return a.length;
    }
    return a * 2;
}
// truthiness guard
const printWord = (name) => {
    if (!name) {
        console.log(name);
    }
    else {
        name.split("").forEach((e) => console.log(e));
    }
};
