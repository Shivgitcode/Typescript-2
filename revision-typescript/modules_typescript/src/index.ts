import { add, pi as PI } from "./utils.js";
import randomArrayNumber from "./utils.js";
import type { Person } from "./types.js";

console.log(add(7, 8));

console.log(randomArrayNumber([2, 4, 5, 56]));

console.log(PI);

const p1: Person = {
  name: "shivansh",
  age: 21,
  sex: "male",
};
