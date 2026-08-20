const nums = [5, 2, 9];
console.log(Math.max(nums)); // NaN — Math.max can't read an array
console.log(Math.max(...nums)); // 9 — same as Math.max(5, 2, 9)
const a = [1, 2];
const b = [3, 4];
const copy = [...a]; // [1, 2] (a new array, not a reference)
const merged = [...a, ...b]; // [1, 2, 3, 4]
const middle = [...a, 99, ...b]; // [1, 2, 99, 3, 4]
console.log(`copy = ${copy}, merged = ${merged}, middle = ${middle}`);

const base = { name: "Ann", age: 20 };
const older = { ...base, age: 21 }; // { name: 'Ann', age: 21 }
const newer = { age: 21, ...base };
console.log(`${older.age} ${newer.age}`);
