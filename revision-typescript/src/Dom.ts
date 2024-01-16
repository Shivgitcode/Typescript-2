const input = document.querySelector("#inp")!; //as HTMLInputElement;

// const btn = document.querySelector("#btn")! as HTMLButtonElement;
const btn = document.querySelector<HTMLButtonElement>("#btn")!;

btn.addEventListener("click", () => {
  console.log("hello everyone");
});

let mystery: unknown = "Hellow World";

const numchars = (mystery as string).length;

console.log((<HTMLInputElement>input).value);
// console.log(input.value);
