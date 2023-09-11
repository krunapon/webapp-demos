import inquirer from 'inquirer'

function add(n1, n2) {
    let result = parseFloat(n1) + parseFloat(n2)
    return result;
}
  
var questions = [
    {	
      type: 'input',
      name: 'operands',
      message:'Operands:'
    }
]

/*inquirer.prompt(questions).then(answers => {
    const operands =  answers['operands'];
    console.log("operands are " + operands);
    const args = operands.split(" ");
    let n1 = args[0];
    let n2 = args[1];
    console.log(n1 + " + " + n2 + " = " + add(n1,n2))
})*/

inquirer.prompt(questions).then(answers => {
  const sum = answers['operands'].split(" ").map(num => parseFloat(num)).reduce((total, x) => total + x, 0)
  console.log(`operands are ${answers['operands']}`);
  console.log(`${answers['operands'].split(' ').join(' + ')} = ${sum.toFixed(2)}`);
}); 