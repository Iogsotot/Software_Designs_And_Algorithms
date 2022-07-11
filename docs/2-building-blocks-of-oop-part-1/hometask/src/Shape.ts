import { IPoint, Point } from './Point';
export abstract class Shape {
	protected color: string;
	protected filled: boolean;
	points: IPoint[];

	private getHumanReadablePointsArray() {
		return this.points.join(', ');
	}

	public constructor(points: IPoint[]);
	public constructor(points: IPoint[], color: string, filled: boolean);
	public constructor(...args: any[]) {
		if (args[0].length >= 3) {
			this.points = args[0];
			this.color = 'green';
			this.filled = true;
			if (args.length === 3) {
				this.color = args[1];
				this.filled = args[2];
			}
		} else {
			throw new Error('Shape must have at least 3 points (2 points is just a line)');
		}
	}

	public toString() {
		return `A Shape with color of ${this.color} and ${
			this.filled ? 'filled' : 'not filled'
		}. Points: ${this.getHumanReadablePointsArray()}.`;
	}

	public getPerimeter() {
		return (
			this.points.reduce((acc, currPoint, i, arr) => acc + currPoint.distance(arr[i - 1]) || 0, 0) +
			this.points[this.points.length - 1].distance(this.points[0])
		);
	}

	abstract getType(): string;
}
