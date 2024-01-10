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

function printSomething<T>(num: T[]): T[] {
  return num;
}

const num: Array<number> = [];
const names: Array<string> = [];

// const input = document.querySelector<HTMLInputElement>("#name")!;
const input = document.getElementById("name")! as HTMLInputElement;

input.value = "shivansh";

// printSomething("shivansh");
// printSomething(3);
// const arr1 = printSomething([1, 2, 3]);
// console.log(arr1);

function printElement<T>(element: T): T {
  return element;
}

function printCollection<T>(element: T[]): T[] {
  return element;
}

const hello: string[] = ["shivansh", "aggarwal"];

interface Cats {
  name: string;
  color?: string;
}

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    object2,
  };
}

console.log(printElement<number>(3));
console.log(printElement<string>("shivansh"));
console.log(printElement<Cats>({ name: "silky", color: "red" }));

console.log(printCollection<string>(["shivansh", "Aggarwal"]));
console.log(printCollection<number>([2, 3]));
console.log(printCollection<boolean>([true, false]));
console.log(printCollection(["hello", "bruhh"]));
console.log(printCollection([3412, 32323]));

console.log(merge(["colt", 21], [3, 4]));

function makeAnEmptyArray<T = number>(): T[] {
  return [];
}

const arr = makeAnEmptyArray();
