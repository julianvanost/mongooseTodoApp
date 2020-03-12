const router = require('express').Router()
const { User } = require('../models')

// GET all users
router.get('/users/:id', (req, res) => User.findByIdAndDelete(req.params.id)
  .populate('items')
  .then(user => res.json(user))
  .catch(e => console.error(e)))


// POST one User
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))


module.exports = router
