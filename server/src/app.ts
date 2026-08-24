import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import { DishStore } from './data.js';

export function createApp(store: DishStore = new DishStore()): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'fanchao-server' });
  });

  app.get('/api/dishes', (_req: Request, res: Response) => {
    res.json(store.list());
  });

  app.post('/api/dishes', (req: Request, res: Response) => {
    try {
      const dish = store.add({
        name: req.body?.name,
        mainIngredient: req.body?.mainIngredient,
        spicy: req.body?.spicy,
      });
      res.status(201).json(dish);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  });

  return app;
}
