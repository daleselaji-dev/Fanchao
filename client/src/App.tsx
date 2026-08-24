import { useEffect, useState } from 'react';
import { createDish, fetchDishes, type Dish } from './api';

export function App() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [name, setName] = useState('');
  const [mainIngredient, setMainIngredient] = useState('');
  const [spicy, setSpicy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDishes()
      .then(setDishes)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    try {
      const dish = await createDish({ name, mainIngredient, spicy });
      setDishes((prev) => [...prev, dish]);
      setName('');
      setMainIngredient('');
      setSpicy(false);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1>Fanchao 番炒菜单</h1>
        <p>A tiny full-stack demo for the Cloud Agent environment.</p>
      </header>

      <section className="card">
        <h2>Add a dish</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Dish name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. 麻婆豆腐"
              required
            />
          </label>
          <label>
            Main ingredient
            <input
              value={mainIngredient}
              onChange={(e) => setMainIngredient(e.target.value)}
              placeholder="e.g. 豆腐"
              required
            />
          </label>
          <label className="form__checkbox">
            <input
              type="checkbox"
              checked={spicy}
              onChange={(e) => setSpicy(e.target.checked)}
            />
            Spicy 🌶️
          </label>
          <button type="submit">Add dish</button>
        </form>
        {error && <p className="error" role="alert">{error}</p>}
      </section>

      <section className="card">
        <h2>Menu ({dishes.length})</h2>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul className="dishes">
            {dishes.map((dish) => (
              <li key={dish.id} className="dish">
                <span className="dish__name">{dish.name}</span>
                <span className="dish__meta">
                  {dish.mainIngredient}
                  {dish.spicy ? ' · 🌶️ spicy' : ''}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
