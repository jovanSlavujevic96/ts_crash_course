interface Point2Di {
    xPos: number;
    yPos: number;
    readonly name?: string // readonly means it can be only set on creation and cannot be changed later. 
                           // The ? means it is optional.
}

const p1: Point2Di = { xPos: 0, yPos: 0, name: "CenterPoint" };
console.log(p1);

class Point2D {
    xPos: number = 0 // default value;
    yPos: number = 0;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

const p2: Point2D = new Point2D(0, 0);
console.log(p2);

class Point3D extends Point2D {
    zPos: number = 0;
    
    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }
}

const p3: Point3D = new Point3D(0, 0, 0);
console.log(p3);
