class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x; // this.x refers to the class member
        this.y = y; // y refers to the parameter
    }
}
class Point2 {
    x: number;
    y: number;
    // with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point3 {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }