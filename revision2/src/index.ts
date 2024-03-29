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

const numarr = [3, 2, 5, 6, 2, 1]

numarr.forEach((el) => {
  if (el > 5) {
    console.log(el)
  }
})

type Pop = {
  name: string,
  followers: number,
  readonly totalTracks?: number
  similarArtist?: {
    name?: string,
    followers: number
  }
}


// let track1:Pop={
//   name:"Flawless 2",
//   followers:200000,
//   totalTracks:3,
//   similarArtist
// }

// track1.totalTracks=20

type Humans = {
  name: string,
  age: number,

}

type Animals = {
  name: string,
  age: number,
  breed?: string
}

type LivingOrganisms = Humans & Animals

const male1: LivingOrganisms = {
  name: "shivansh",
  age: 19
}


interface Grocery {
  item: string,
  price: number,

}


const httprequest: [number, string] = [200, "GET"]


// console.log(httprequest[0])
httprequest[1] = "Post"

// enums

enum httprequest2 {
  status,
  method,
  err = 500
}

const reqStatus = httprequest2.err

interface Grocery {
  noOfItems: number
}


const list1: Grocery[] = [
  { item: "chips", price: 25, noOfItems: 4 },
  { item: "coldrink", price: 40, noOfItems: 5 }
]


interface Clothes extends Grocery {
  brand: string
  size: string

}


