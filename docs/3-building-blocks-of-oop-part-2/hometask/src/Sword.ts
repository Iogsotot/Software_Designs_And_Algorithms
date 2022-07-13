import { Weapon } from './Weapon';

export class Sword extends Weapon {
	constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
		super('sword', baseDamage, baseDurability, value, weight);
	}

	public polish(): void {
		const damageModifier: number = this.getDamageModifier();
		const baseDamage: number = this.getBaseDamage();
		const polishedDamageModifier = damageModifier + Weapon.MODIFIER_CHANGE_RATE;

		if (baseDamage >= polishedDamageModifier * 4) {
			this.setDamageModifier(polishedDamageModifier);
		}
	}
}
