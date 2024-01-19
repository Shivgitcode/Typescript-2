// typeof guard

function age(a: number | string) {
  if (typeof a === "string") {
    return a.length;
  }
  return a * 2;
}

// truthiness guard

const printWord = (name: string | null) => {
  if (!name) {
    console.log("no name was provided here");
  } else {
    name.split("").forEach((e) => console.log(e));
  }
};

// interface Animal{

// }

const btn2 = document.querySelector("#btn");

// if (btn2) {
//   btn2;
// } else {
//   btn2;
// }

// function someDemo(x: string | number, y: string | boolean) {
//   if (x === y) {
//     x.toUpperCase();
//     y.toUpperCase();
//   }

//   return x + y;
// }

// printWord();

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(
  getRuntime({ title: "Spongebob", duration: 80, episodeDuration: 22 })
);

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    date;
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// type predicates

interface Cat2 {
  name: string;
  numLives: number;
}

interface Dog2 {
  name: string;
  breed: string;
}

function isCat(animal: Cat2 | Dog2): animal is Cat2 {
  return (animal as Cat2).numLives !== undefined;
}

// discriminated types

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type farmAnimals = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
  animal.kind;
}
