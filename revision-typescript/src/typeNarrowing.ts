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

printWord();
