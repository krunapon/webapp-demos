async function helloFunction() {
  return "Hello World!";
}

const helloFunction2 = () => Promise.resolve("Hello World!");

helloFunction().then((value) => console.log(value));

helloFunction2().then((value) => console.log(value));
