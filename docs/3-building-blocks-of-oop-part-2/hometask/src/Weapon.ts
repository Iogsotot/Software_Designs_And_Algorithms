import { Item } from './Item';

export abstract class Weapon extends Item {
	static MODIFIER_CHANGE_RATE: number = 0.05;
	private baseDamage: number = 0;
	private damageModifier: number = 0;
	private baseDurability: number = 0;
	private durabilityModifier: number = 0;

	protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
		super(name, value, weight);

		this.baseDamage = baseDamage;
		this.baseDurability = baseDurability;
	}

	public getDamage(): number {
		const effectiveDamage = this.baseDamage + this.damageModifier;
		return effectiveDamage;
	}

	public getDurability(): number {
		const effectiveDurability = this.durabilityModifier + this.baseDurability;
		return effectiveDurability;
	}

	public toString(): string {
		return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
	}

	public use(): string {
		const name = this.getName();
		const msg = `You use the ${name}, dealing ${this.getDamage()} points of damage.`;

		if (this.isBroken()) {
			return `You can\'t use the ${name}`;
		}

		this.setBaseDurability(this.baseDurability - Weapon.MODIFIER_CHANGE_RATE);

		return this.isBroken() ? `${msg} The hammer breaks.` : msg;
	}

	public getDamageModifier(): number {
		return this.damageModifier;
	}

	public setDamageModifier(value: number): void {
		this.damageModifier = value;
	}

	public getBaseDamage(): number {
		return this.baseDamage;
	}

	private isBroken(): boolean {
		return this.getDurability() <= 0;
	}

	private setBaseDurability(durability: number): void {
		this.baseDurability = durability;
	}
}
