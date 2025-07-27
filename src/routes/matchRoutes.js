const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/', matchController.createMatch);
router.post('/matches/:matchId/join/:playerId', matchController.joinMatch);
router.post('/matches/:matchId/leave/:playerId', matchController.leaveMatch);
router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);
router.delete('/:id', matchController.deleteMatch);

module.exports = router;
