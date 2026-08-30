class Point2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

function printCoordinates1(point: Point2D): void {
    console.log(`X: ${point.xPos}, Y: ${point.yPos}`);
}

function printCoordinates2(xPos: number, yPos: number): void {
    console.log(`X: ${xPos}, Y: ${yPos}`);
}

function printCoordinates(point: Point2D): void;
function printCoordinates(xPos: number, yPos: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown): void {
    if (typeof arg1 === "object") {
        // console.log(`X: ${(arg1 as Point2D).xPos}, Y: ${(arg1 as Point2D).yPos}`);
        printCoordinates1(arg1 as Point2D);
    } else {
        // console.log(`X: ${arg1}, Y: ${arg2}`);
        printCoordinates2(arg1 as number, arg2 as number);
    }
}

const point = new Point2D(10, 20);
printCoordinates(point); // Output: X: 10, Y: 20
printCoordinates(30, 40); // Output: X: 30, Y: 40
