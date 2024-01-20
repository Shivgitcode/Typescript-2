"use strict";
function add(x, y) {
    return x + y;
}
function randomArrayNumber(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}
