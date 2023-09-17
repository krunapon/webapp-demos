class Greeter2 {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    protected getName() {   
        return "Manee";
    }
}

class SpecialGreeter extends Greeter2 {
    public howdy() {
        console.log("Howdy, " + this.getName());    
    }
}
const g2 = new SpecialGreeter();
g2.greet();






g2.getName();