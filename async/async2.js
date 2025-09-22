async function f() {
  return 1;
}
f().then(console.log);

async function f2() {
  return Promise.resolve(1);
}
f2().then(console.log);
