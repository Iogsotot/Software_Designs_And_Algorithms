import { IPoint } from './Point';
export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    points: IPoint[]

    public constructor(points: IPoint[]);
    public constructor(points: IPoint[], color: string, filled: boolean);
    public constructor(...args: any[]) {
        if (args[0].length >= 3) {
            if (args.length === 1) {
                this.points = args[0];
                this.color = 'green';
                this.filled = true;
            };
            if (args.length === 3) {
                this.points = args[0];
                this.color = args[1];
                this.filled = args[2];
            }
        } else {
            throw new Error('Shape has at least 3 points (2 points is just a line)');
        }
    }

    public toString() {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.humanReadablePoinstArray()}.`
    }

    public getPerimeter() {
        return this.points.reduce((prevPoint, currPoint) => prevPoint + currPoint.distance(prevPoint), 0);
    }

    private humanReadablePoinstArray() {
        return this.points.map((point) => ` ${point.toString()}`).toString().trim();
    }

    abstract getType(): string;
}
