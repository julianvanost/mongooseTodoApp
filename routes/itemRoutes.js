const router = require('express').Router()
const { Item } = require('../models')

// GET all items
// router.get('/items', (req, res) => Item.find()
//   .then(items => res.json(items))
//   .catch(e => console.error(e)))


// POST one item
router.post('/items', (req, res) => Item.create(req.body)
  // .populate('user')
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))


// PUT one item
router.put('/items/:id', (req, res) => Item.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))


// DELETE one item
router.delete('/items/:id', (req, res) => Item.findByIdAndDelete(req.params.id)
  // .populate('user')
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
