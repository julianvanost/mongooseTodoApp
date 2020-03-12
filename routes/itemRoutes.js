const router = require('express').Router()
const { Item, User } = require('../models')

// POST one item
router.post('/items', (req, res) => Item.create(req.body)
  .then(({ _id }) => {
    User.findByIdAndUpdate(req.body.owner, { $push: { items: _id } })
      .then(() => res.sendStatus(200))
  })
  .catch(e => console.error(e)))

// PUT one item
router.put('/items/:id', (req, res) => Item.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE one item
router.delete('/items/:id', (req, res) => Item.findByIdAndDelete(req.params.id)
  .then(({ _id, owner }) => {
    User.findByIdAndUpdate(owner, { $pull: { items: _id } })
      .then(() => res.sendStatus(200))
  })
  .catch(e => console.error(e)))

module.exports = router
