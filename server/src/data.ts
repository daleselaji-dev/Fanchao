export interface Dish {
  id: number;
  name: string;
  mainIngredient: string;
  spicy: boolean;
}

const seed: Dish[] = [
  { id: 1, name: '番茄炒蛋', mainIngredient: '鸡蛋', spicy: false },
  { id: 2, name: '宫保鸡丁', mainIngredient: '鸡肉', spicy: true },
  { id: 3, name: '清炒时蔬', mainIngredient: '青菜', spicy: false },
];

export class DishStore {
  private dishes: Dish[];
  private nextId: number;

  constructor(initial: Dish[] = seed) {
    this.dishes = initial.map((d) => ({ ...d }));
    this.nextId = this.dishes.reduce((max, d) => Math.max(max, d.id), 0) + 1;
  }

  list(): Dish[] {
    return this.dishes.map((d) => ({ ...d }));
  }

  add(input: { name: string; mainIngredient: string; spicy?: boolean }): Dish {
    const name = input.name?.trim();
    const mainIngredient = input.mainIngredient?.trim();
    if (!name) {
      throw new Error('name is required');
    }
    if (!mainIngredient) {
      throw new Error('mainIngredient is required');
    }
    const dish: Dish = {
      id: this.nextId++,
      name,
      mainIngredient,
      spicy: Boolean(input.spicy),
    };
    this.dishes.push(dish);
    return { ...dish };
  }
}
