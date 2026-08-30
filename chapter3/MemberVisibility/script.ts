class Point2D {
    private xPos: number; // private property can only be accessed within the class
    protected yPos: number; // protected property can be accessed within the class and its subclasses

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }

    public printX(): void {
        console.log(`X Position: ${this.xPos}`);
    }
}

const p1: Point2D = new Point2D(0, 0);
console.log(p1);
console.log(p1);

class Point3D extends Point2D {
    public zPos: number; // public property can be accessed outside of the class
    
    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }

     public printY(): void {
        // possible because it is protected property and can be accessed within the subclass
        console.log(`Y Position: ${this.yPos}`);
    }
}

const p2: Point3D = new Point3D(0, 0, 0);
console.log(p2);
p2.printX();
p2.printY();
console.log(p2.zPos); // possible because it is public property and can be accessed outside of the class