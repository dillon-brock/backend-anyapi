const { Router } = require('express');
const Plant = require('../models/Plant');
const router = Router();

router
  .get('/', async (req, res) => {
    const plants = await Plant.getAll();
    const ids = plants.map((plant) => ({ id: plant.id, name: plant.name, latin_name: plant.latin_name }));
    res.json(ids);
  });


module.exports = router;
