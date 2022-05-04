import { Router } from 'express';
import store from '../store';

const route = Router();

route.get('/', (req, res) => {
  res.json({ error: true });
});

route.get('/:page', (req, res) => {
  const pageName = req.params.page;

  const data = store[pageName];

  if (!data) {
    res.json({ error: true });
  } else {
    res.json({ error: false, data: store[pageName] });
  }
});

export default route;
