export function add(x: number, y: number) {
  return x + y;
}

export default function randomArrayNumber<T>(arr: T[]): T {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

export const pi = 3.14;
