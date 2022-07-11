import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
	public constructor(points: Point[]);
	public constructor(points: Point[], color: string, filled: boolean);
	public constructor(...args: any[]) {
		super(args);
	}

	public toString(): string {
		return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
	}

	public getType(): string {
		const sideOne = this.points[0].distance(this.points[1]);
		const sideTwo = this.points[1].distance(this.points[2]);
		const sideTree = this.points[2].distance(this.points[0]);
		if (sideOne === sideTwo && sideOne === sideTree) return 'equilateral triangle';
		if (sideOne === sideTwo || sideTwo === sideTree || sideTree === sideOne) return 'isosceles triangle';
		return 'scalene triangle';
	}
}
