async function f() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  const result = await promise;
  console.log(result);
}
f();
