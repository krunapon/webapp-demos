async function myDisplay() {
    let myPromise = new Promise(function(myResolve) {
        setTimeout(function() { myResolve("This is a promise!!"); }, 3000);
    });
    let result = await myPromise;
    console.log(result);
}
myDisplay();