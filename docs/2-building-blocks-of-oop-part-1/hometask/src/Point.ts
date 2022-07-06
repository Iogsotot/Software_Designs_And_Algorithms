export interface IPoint {
  toString: () => string;
  distance: (...args: any[]) => number;
}

export class Point implements IPoint {
  readonly x: number;
  readonly y: number;

  public constructor();
  public constructor(x: number, y: number);
  public constructor(...args: any[]) {
    if (args.length === 0) {
      this.x = 0;
      this.y = 0;
    }
    if (args.length === 2) {
      this.x = args[0];
      this.y = args[1];
    }
  }

  public toString() {
    return `(${this.x}, ${this.y})`
  }

  public distance();
  public distance(other: IPoint);
  public distance(x: number, y: number);
  public distance(...args: any[]) {
    if (args.length === 0) {
      return this.distanceCalculate(this.x, this.y, 0, 0);
    };
    if (args.length === 1 && args[0] instanceof Point) {
      return this.distanceCalculate(this.x, this.y, args[0].x, args[0].y)
    }
    if (args.length === 2) {
      return this.distanceCalculate(this.x, this.y, args[0], args[1]);
    }
  }

  private distanceCalculate(Xa: number, Ya: number, Xb: number, Yb: number): number {
    return + Math.sqrt(Math.pow((Xb - Xa), 2) + Math.pow((Yb - Ya), 2)).toFixed(2);
  }
}

