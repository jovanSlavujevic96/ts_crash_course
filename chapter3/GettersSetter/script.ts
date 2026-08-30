class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public getX(): number {
        return this._xPos;
    }
    public getY(): number {
        return this._yPos;
    }

    public setX(xPosInput: number): void {
        this._xPos = xPosInput;
    }
    public setY(yPosInput: number): void {
        this._yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    protected _zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }

    public getZ(): number {
        return this._zPos;
    }

    public setZ(zPosInput: number): void {
        this._zPos = zPosInput;
    }
}

const p1: Point3D = new Point3D(0, 0, 0);
console.log(p1);
console.log(p1.getX());
console.log(p1.getY());
console.log(p1.getZ());

p1.setX(10);
p1.setY(20);
p1.setZ(30);

console.log(p1);
console.log(p1.getX());
console.log(p1.getY());
console.log(p1.getZ());
