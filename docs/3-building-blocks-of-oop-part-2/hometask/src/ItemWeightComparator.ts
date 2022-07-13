import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
	public compare(first: Item, second: Item): number {
		if (first.getWeight() !== second.getWeight()) {
			return first.getWeight() > second.getWeight() ? 1 : -1;
		}
		return first.compareTo(second);
	}
}
