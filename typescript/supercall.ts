class Base {
    k = 4;
}

class Derived extends Base {




    constructor() {
        console.log(this.k);
        super()
    }
}