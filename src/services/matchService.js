const matches = require('../database/matchStorage');
const Match = require('../models/Match');
const MATCH_STATES = require('../constants/matchStates');
const { v4: uuidv4 } = require('uuid');

class MatchService {
  createMatch(matchData) {
    const newMatch = new Match(matchData);

    matches.push(newMatch);
    return newMatch;
  }

  joinMatch(matchId, playerId) {
    const match = this.getMatchById(matchId);
    if (!match) throw new Error('Match not found');

    if (match.state !== MATCH_STATES.IN_PROGRESS) {
      throw new Error('Match is not open for joining');
    }

    if (match.players.includes(playerId)) {
      throw new Error('Player already joined this match');
    }

    if (match.players.length >= 4) {
      throw new Error('Match is already full');
    }

    match.players.push(playerId);

    if (match.players.length === 4) {
      match.state = MATCH_STATES.IN_PROGRESS;
    }

    return match;
  }

  updateState(matchId, newState) {
    const match = this.getMatchById(matchId);
    if (!match) throw new Error('Match not found');

    if (newState === MATCH_STATES.FINISHED) {
      throw new Error('"finished" state can only be set automatically');
    }

    if (match.state === MATCH_STATES.IN_PROGRESS && newState === MATCH_STATES.CANCELED) {
      match.state = MATCH_STATES.CANCELED;
    }

    match.state = newState;

    return match;
  }

  getAllMatches() {
    return matches;
  }

  getMatchById(id) {
    return matches.find(match => match.id === id);
  }

  autoFinishMatch(matchId) {
    const match = this.getMatchById(matchId);
    if (!match) throw new Error('Match not found');

    if (match.state !== MATCH_STATES.IN_PROGRESS) {
      throw new Error('Only in-progress matches can be finished');
    }

    match.state = MATCH_STATES.FINISHED;

    return match;
  }

  simulateRound(matchId) {
    const match = this.getMatchById(matchId);
    if (!match) throw new Error('Match not found');

    if (match.state !== MATCH_STATES.IN_PROGRESS) {
      throw new Error('Cannot play round unless match is in progress');
    }

    match.roundsPlayed += 1;

    // Finaliza automaticamente após 3 rodadas
    if (match.roundsPlayed >= 3) {
      return this.autoFinishMatch(matchId);
    }

    return match;
  }
}

module.exports = new MatchService();
