function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
}