function foo(config: {
    readonly bar: number,
    readonly bas: number
}) {

}
let config = {bar: 123, bas:456};
foo(config);

type Foo = {
    readonly bar: number;
    readonly bas: number;
}
let foo2: Foo = {bar: 123, bas: 456};  





foo2.bar = 456