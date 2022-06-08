const { Router } = require('express');
const Cat = require('../models/CartoonCat');
module.exports = Router()

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const catData = await Cat.getAll();
    const cats = catData.map((cat) => { return { id: cat.id, name: cat.name }; });
    res.json(cats);
  });
