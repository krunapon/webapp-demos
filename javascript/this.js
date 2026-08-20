const person = {
  name: "Ann",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(person.greet()); // "Hi, I'm Ann"  ✅ called on person

const fn = person.greet; // detached — no object attached
console.log(fn()); // "Hi, I'm undefined" ❌ this is no longer person
