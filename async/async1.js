async function myFunction() {
    return "Hello World!";
}
//function myFunction has the same result as function myFunction2
function myFunction2() {
    return Promise.resolve("Hello World!");
}
myFunction().then((value) => {
    console.log(value);
});
myFunction2().then((value) => { 
    console.log(value);
});