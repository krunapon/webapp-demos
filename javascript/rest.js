function sum(...values) {
  // values is a real array: [1, 2, 3]
  let total = 0;
  for (const n of values) {
    total += n;
  }
  return total;
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
