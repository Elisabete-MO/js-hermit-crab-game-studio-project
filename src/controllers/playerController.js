const playerService = require('../services/playerService');

class PlayerController {
  createPlayer(req, res) {
    try {
      const player = playerService.createPlayer(req.body);
      res.status(201).json(player);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  getAllPlayers(req, res) {
    const players = playerService.getAllPlayers();
    res.json(players);
  }

  getPlayerById(req, res) {
    try {
      const player = playerService.getPlayerById(req.params.id);
      if (!player) return res.status(404).json({ error: 'Player not found' });
      res.json(player);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  putPlayer(req, res) {
    try {
      const updatedPlayer = playerService.updatePlayer(req.params.id, req.body);
      res.json(updatedPlayer);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  deletePlayer(req, res) {
    try {
      playerService.deletePlayer(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PlayerController();
