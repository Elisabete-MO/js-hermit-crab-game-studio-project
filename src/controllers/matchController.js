const MATCH_STATES = require('../constants/matchStates');
const matchService = require('../services/matchService');

const matchController = {
  async createMatch(req, res) {
    try {
      const match = await matchService.createMatch(req.body);
      res.status(201).json(match);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async joinMatch(req, res) {
    const { matchId, playerId } = req.params;

    try {
      const match = await matchService.joinMatch(matchId, playerId);
      res.json(match);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async leaveMatch(req, res) {
    const { matchId } = req.params;

    try {
      const match = await matchService.updateState(matchId, MATCH_STATES.CANCELED);
      res.json(match);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllMatches(req, res) {
    try {
      const matches = await matchService.getAllMatches();
      res.json(matches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getMatchById(req, res) {
    const { id } = req.params;

    try {
      const match = await matchService.getMatchById(id);
      if (!match) {
        return res.status(404).json({ error: 'Match not found.' });
      }
      res.json(match);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = matchController;
