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
        console.log("no name was provided here");
    }
    else {
        name.split("").forEach((e) => console.log(e));
    }
};
// interface Animal{
// }
const btn2 = document.querySelector("#btn");
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", duration: 80, episodeDuration: 22 }));
function printFullDate(date) {
    if (date instanceof Date) {
        date;
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadooledo";
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
