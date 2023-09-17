type Point = {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
    return str;
}

let userInput = sanitizeInput("input");

userInput = "new input";
console.log(userInput)