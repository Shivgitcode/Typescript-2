// aam zindagi

function printString(name: string): string {
  return name;
}

function printNum(num: number): number {
  return num;
}

printString("shivansh");
printNum(34);

// mentos zindagi

function printData<T>(data: T) {
  console.log(data);
}

printData<string>("shivansh");
printData<number>(34332);

// printData([1,2,5,6])

function printCollection<T>(data: T[]): T[] {
  return data;
}

console.log(printCollection<string>(["shivansh", "aggarwal"]));

function allCollection<T extends object, U>(arr1: T, arr2: U) {
  //   console.log(arr1);
  //   console.log(arr2);
  return {
    ...arr1,
    ...arr2,
  };
}

console.log(
  allCollection(["shivansh", "aggarwal"], { team: "Al Nassar", shirtNo: 7 })
);

function printArray<T>(): T[] {
  return [];
}

const myarr = printArray();
myarr.push("shivansh");
