export interface Dish {
  id: number;
  name: string;
  mainIngredient: string;
  spicy: boolean;
}

export async function fetchDishes(): Promise<Dish[]> {
  const res = await fetch('/api/dishes');
  if (!res.ok) {
    throw new Error(`Failed to load dishes (${res.status})`);
  }
  return res.json();
}

export async function createDish(input: {
  name: string;
  mainIngredient: string;
  spicy: boolean;
}): Promise<Dish> {
  const res = await fetch('/api/dishes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Failed to create dish (${res.status})`);
  }
  return res.json();
}
