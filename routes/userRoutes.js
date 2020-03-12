const router = require('express').Router()
const { User } = require('../models')

// GET one user
router.get('/users/:id', (req, res) => User.findById(req.params.id)
  .populate('items')
  .then(user => res.json(user))
  .catch(e => console.error(e)))

router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
