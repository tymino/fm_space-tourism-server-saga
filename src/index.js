import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import route from './route';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.end('index');
});

app.use('/api', route);

app.listen(PORT, () => console.log(`Server open! Port ${PORT}`));
