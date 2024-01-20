function add(x: number, y: number) {
  return x + y;
}

function randomArrayNumber<T>(arr: T[]): T {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
