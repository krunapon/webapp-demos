const s = "hello";
if (typeof s === "string") {
    console.log(`${s} is a string`);
}
const n = 11;
function hello() {
    console.log("Hello World!");
}
if (typeof hello === "function") {
    hello();
}
let z;
if (typeof z === "undefined") {
    console.log("z is undefined");
}