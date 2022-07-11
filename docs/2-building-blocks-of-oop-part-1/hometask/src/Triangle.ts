import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
	public constructor(arg1: Point, arg2: Point, arg3: Point);
	public constructor(arg1: Point, arg2: Point, arg3: Point, color: string, filled: boolean);
	public constructor(...args: [Point, Point, Point, string?, boolean?]) {
		const [arg1, arg2, arg3, color, filled] = args;
		super([arg1, arg2, arg3], color, filled);
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
