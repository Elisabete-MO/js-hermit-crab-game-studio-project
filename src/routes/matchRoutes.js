const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/', matchController.creat  eMatch);
router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);
router.delete('/:id', matchController.deleteMatch);

module.exports = router;
