let num: number = 124; //"this is number declaration "
// num = 342;
let person: string = "shivansh"; //this is string type declaration

let list: any = true; //this is any type declaration

let isPlaying: boolean = true; //this is boolean type declaration

//type declaration in functions

function add(num1: number, num2: number): number {
  //here we are telling the function that the parameter we are passing to you are number
  return num1 + num2;
}
//we can also define the return type of the function . there is a void return type which can't return anything

function concat(st1: string, st2: string) {
  console.log(st1 + st2);
}

const num1: number = 200;
const num2: number = 100;

concat("shivansh ", "aggarwal");

console.log(add(num1, num2));

const score = ["john", "wick"];

score.forEach((el) => {
  return el.toUpperCase();
});
//when there is an unamed function like in the above eg in forEach loop then typescript can infer the types of the parameters by it's own

function someValue(): never {
  //   console.log("shivansh");
  while (true) {
    console.log("shivansh");
  }
}

// someValue();

// object types in typescript

// const hello={first:"shivansh",last:"aggarwal"} this is  a normal objectt in javascript
// in the above example also typescripts type inference itself declared first and last as string

const hello: { first: string; last: string } = {
  first: "shivansh",
  last: "aggarwal",
}; // this is how we can annotate an object in typescript

console.log(hello.first);

// in function

function fullName(person: { first: string; last: string }) {
  return `${person.first} ${person.last}`;
}

// this is how we declare parameter types in function of objects

function playerName(player: { first: string; last: string }): {
  first: string;
  last: string;
} {
  return player;
}

console.log(playerName({ first: "cristiano", last: "ronaldo" }));

// we can also define our own types

type Coordinate = {
  x: number;
  y: number;
};

const a1: Coordinate = { x: 20, y: 30 };

type shivansh = string;

type Animal = {
  readonly name: string; // we can only read this property
  age: number;
  breed?: string;
  like?: {
    food: string;
    park: string;
  };
};

const name2: shivansh = "aggarwal";

const dog: Animal = {
  name: "Rocky",
  age: 2,
  breed: "shivansh",
};

// type;

// dog.name = "hello"

// array type declaration

// const teams=[] // this is an  any type array which means we can store any type of data inside this storage

const teams: string[] = ["manchester united", "manchester city", "real madrid"];

console.log(teams[0]);

const leagues: Array<string> = ["priemer league", "la liga", "serie a"]; // this  is an alternating syntax for declaring array types

type Point = {
  x: number;
  y: number;
};

const coordinate1: Point[] = [
  { x: 3, y: 4 },
  { x: 2, y: 7 },
];

// multidimensional arrays

const cutcross: string[][] = [
  ["x", "o", "x"],
  ["x", "o", "x"],
  ["x", "o", "x"],
];

console.log("i am inside typescript");

// type intersection

type CarDesc = {
  name: string;
  model: string;
  price?: number;
};

type CarLook = {
  carno?: number;
  color?: string;
};

type Car = CarDesc & CarLook;

const car1: Car = { name: "harrier", model: "black knight", price: 1500000 };

//union types

const isLoading: boolean | string = "shivansh"; // this variable can have both kind of values boolean and string

// function parameter can also have union type values

function printage(age: string | number): string | number {
  if (typeof age === "string") {
    return age.toUpperCase(); //this is called typenarrowing
  }
  return age * 2;
}

// we can also make our custom union types

type Dog = {
  breed: string;
};

type Cat = {
  Catname: string;
};

const animal: Dog | Cat = { breed: "german", Catname: "jesper" };

// literal type unions

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const day: DayOfWeek = "Monday"; // this okay
// const day2:DayOfWeek="January" // this is not okay

// printage(true)

// tuples

const employee: [string, number] = ["shivansh", 2210990830]; //this is a tuple
employee.push("aggarwal"); // tuples behave differently when used with push as you can see that employee can only hold two values but when we are pushing an element into the same array it is not showing any error that's how tuples behave

type Httpsresponse = [string, number];

const goodRes: Httpsresponse = ["ok", 200];

// Enums

enum Responses {
  no = "No",
  yes = "yes",
  maybe = "May",
}

const stat = Responses.no;

enum Marks { // by default value of first enum type  inside enum is 0 and then it is  incremented as we declare more values and we can also assign values to the constants inside enum
  math,
  science,
  hindi,
}

// interfaces : these are like type aliases but have some different functions and are only used to declare objects

interface;
