import { IPoint } from './Point';
export abstract class Shape {
	protected color: string;
	protected filled: boolean;
	points: IPoint[];

	private getHumanReadablePointsArray() {
		return this.points.join(', ');
	}

	public constructor(points: IPoint[]);
	public constructor(points: IPoint[], color: string, filled: boolean);
	public constructor(...args: [ IPoint[], string?, boolean?]) {
		const [points, color, filled] = args;
		
		if (points.length >= 3) {
			this.points = points;
			this.color = 'green';
			this.filled = true;
			if (args.length === 3 && color && filled !== undefined) {
				this.color = color;
				this.filled = filled;
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
