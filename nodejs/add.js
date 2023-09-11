import inquirer from "inquirer";

function add(n1, n2) {
  let result = parseFloat(n1) + parseFloat(n2);
  return result;
}

const args = process.argv.slice(2);
let n1 = args[0];
let n2 = args[1];
console.log(n1 + " + " + n2 + " = " + add(n1, n2));
/*
let sum = 0;
args.forEach(function (key, idx, array) {
  process.stdout.write(key);
  if (idx === array.length - 1) {
    process.stdout.write(" = ");
  } else {
    process.stdout.write(" + ");
  }
  sum = sum + parseFloat(key);
});
console.log(`${sum}`);

const sum2 = args
  .map((num) => parseFloat(num))
  .reduce((total, x) => total + x);
console.log(
  `${args.join(" + ")} = ${sum2}`
); */
