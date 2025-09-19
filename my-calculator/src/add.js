import inquirer from "inquirer";

const add = (n1, n2) => parseFloat(n1) + parseFloat(n2);

const args = process.argv.slice(2);
const sum = args.map((num) => parseFloat(num)).reduce((total, x) => total + x);
console.log(`${args.join(" + ")} = ${sum}`);
