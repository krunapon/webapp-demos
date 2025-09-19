async function myDisplay() {
    let myPromise = new Promise(function(myResolve) {
        myResolve("This is a promise!!");
    });
    let result = await myPromise;  
    console.log(result);  
}
myDisplay();