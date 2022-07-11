export interface IPoint {
	toString: () => string;
	distance: (arg1?: IPoint | number, arg2?: number) => number;
}

export class Point implements IPoint {
	readonly x: number;
	readonly y: number;

	public constructor();
	public constructor(x: number, y: number);
	public constructor(...args: number[]) {
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
		return `(${this.x}, ${this.y})`;
	}

	public distance(): number;
	public distance(other: IPoint): number;
	public distance(x: number, y: number): number;
	public distance(arg1?: IPoint | number, arg2?: number): number | undefined {
		const args = arguments;
		if (args.length === 0) {
			return this.distanceCalculate(this.x, this.y, 0, 0);
		}
		if (args.length === 1 && arg1 instanceof Point) {
			return this.distanceCalculate(this.x, this.y, arg1.x, arg1.y);
		}
		if (!!arg2 && !!arg1 && typeof arg1 === 'number') {
			return this.distanceCalculate(this.x, this.y, arg1, arg2);
		}
	}

	private distanceCalculate(xA: number, yA: number, xB: number, yB: number): number {
		return +Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2).toFixed(2);
	}
}
