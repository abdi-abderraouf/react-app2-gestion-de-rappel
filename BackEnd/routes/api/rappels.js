const express = require('express');
const rappels = require('../../models/rappels');
const router = express.Router();

// Load User model
const Rappel = require('../../models/rappels');

// @route GET api/users/test
// @description tests users route
// @access Public
router.get('/test', (req, res) => res.send('rappel route testing!'));

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
  Rappel.find()
    .then(rappels => res.json(rappels))
    .catch(err => res.status(404).json({ norappelsfound: 'No rappels found' }));
});

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get('/:id', (req, res) => {
  Rappel.findById(req.params.id)
    .then(rappel => res.json(rappel))
    .catch(err => res.status(404).json({ norappelfound: 'No rappel found' }));
});

// @route GET api/users
// @description add/save user
// @access Public
router.post('/', (req, res) => {
  Rappel.create(req.body)
    .then(rappel => res.json({ msg: 'rappel added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this rappel' }));
});

// @route GET api/users/:id
// @description Update user
// @access Public
router.put('/:id', (req, res) => {
  Rappel.findByIdAndUpdate(req.params.id, req.body)
    .then(rappel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.delete('/:id', (req, res) => {
  Rappel.findByIdAndRemove(req.params.id, req.body)
    .then(rappel => res.json({ mgs: 'rappel entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }));
});

module.exports = router;