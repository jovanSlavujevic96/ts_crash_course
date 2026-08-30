class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    public static NUM_DIMENSIONS: number = 2;

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

    public static override NUM_DIMENSIONS: number = 3;

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

console.log(Point2D.NUM_DIMENSIONS); // 2
console.log(Point3D.NUM_DIMENSIONS); // 3
