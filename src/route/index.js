import { Router } from 'express';
import store from '../store';

const route = Router();

route.get('/', (req, res) => {
  res.end('index');
});

route.get('/:page', (req, res) => {
  const pageName = req.params.page;

  res.json({ data: store[pageName] });
});

export default route;
