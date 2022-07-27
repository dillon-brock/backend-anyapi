const { Router } = require('express');
const Plant = require('../models/Plant');
const router = Router();

router
  .get('/plants', async (req, res) => {
    const plants = await Plant.getAll();
    const ids = plants.map((plant) => ({ id: plant.id, name: plant.name, latin_name: plant.latin_name }));
    res.json(ids);
  })
  .get('/plants/:id', async (req, res) => {
    const plant = await Plant.getById(req.params.id);
    res.json(plant);
  });


module.exports = router;
