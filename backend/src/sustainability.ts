import express from 'express';
import cities from '../gdsi-cities.json'

const router = express.Router();

router.get('/:name', (req, res) => {
  const name = req.params.name;
  res.json(cities[name as keyof typeof cities] ?? { data: null });
})

export default router;
