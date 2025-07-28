const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/', matchController.createMatch);
router.post('/matches/:matchId/join/:playerId', matchController.joinMatch);
router.patch('/:id/state', matchController.leaveMatch);
router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);

module.exports = router;
