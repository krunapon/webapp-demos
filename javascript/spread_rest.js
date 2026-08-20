const base = { name: "Ann", age: 20 };
const older = { ...base, age: 21 }; // spread: new object (immutable update)
const more = [...[1, 2, 3], 4, 5];

function sum(...values) {
  // rest: collect arguments
  return values.reduce((t, n) => t + n, 0);
}

sumResult = sum(1, 2, 3); // 6
console.log(`Base name is ${base.name}`);
console.log(`Older name is ${older.name}`);
console.log(`more is ${more}`);
console.log(`sum is ${sumResult}`);
