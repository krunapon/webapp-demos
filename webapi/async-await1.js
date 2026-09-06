async function myDisplay() {
  const myPromise = new Promise((resolve) => {
    resolve("This is a promise!!");
  });
  const result = await myPromise;
  console.log(result);
}
myDisplay();
