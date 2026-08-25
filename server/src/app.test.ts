import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from './app.js';
import { DishStore } from './data.js';

function makeApp() {
  return createApp(new DishStore());
}

describe('fanchao API', () => {
  it('reports health', async () => {
    const res = await request(makeApp()).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('lists seeded dishes', async () => {
    const res = await request(makeApp()).get('/api/dishes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(3);
    expect(res.body[0]).toHaveProperty('name');
  });

  it('creates a new dish', async () => {
    const app = makeApp();
    const res = await request(app)
      .post('/api/dishes')
      .send({ name: '麻婆豆腐', mainIngredient: '豆腐', spicy: true });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ name: '麻婆豆腐', mainIngredient: '豆腐', spicy: true });
    expect(typeof res.body.id).toBe('number');

    const list = await request(app).get('/api/dishes');
    expect(list.body.some((d: { name: string }) => d.name === '麻婆豆腐')).toBe(true);
  });

  it('rejects a dish without a name', async () => {
    const res = await request(makeApp())
      .post('/api/dishes')
      .send({ mainIngredient: '豆腐' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
