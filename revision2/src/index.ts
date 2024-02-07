let num1: string = "hello world";
let num2: number = 10;
let num3: boolean = true;

function sum(x: number, y: number): number {
  return x + y;
}

type Coordinates = {
  x: number;
  y: number;
};

let location1: Coordinates = {
  x: 4.5,
  y: 3.5,
};

// console.log(location1)

let players: string[] = [
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

// object types

interface Product {
  name: string;
  price?: number;
}

let p1: Product = { name: "football", price: 500 };

let student: { name: string; degree: string } = {
  name: "shivansh",
  degree: "B.tech",
};

function getParticularString(name: { first: string; last: string }): {
  first: string;
  last: string;
} {
  return { first: name.first.slice(0, 2), last: name.first.slice(0, 2) };
}

console.log(getParticularString({ first: "shivansh", last: "Aggarwal" }));

let name2: "shivansh" | "tanishka" = "shivansh";
name2 = "tanishka";

let p2: Coordinates[] = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
];

function getSomething(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }

  return x + 2;
}

console.log(getSomething("shivansh"));
// console.log(yo)
console.log(getSomething(300));
