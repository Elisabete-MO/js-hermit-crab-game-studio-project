const { v4: uuidv4 } = require('uuid');

const MATCH_STATES = {
  WAITING: 'waiting',
  IN_PROGRESS: 'in_progress',
  FINISHED: 'finished',
  CANCELLED: 'cancelled',
};

class Match {
  constructor({ name }) {
    this.id = uuidv4();
    this.name = name;
    this.players = []; // máximo de 4 jogadores
    this.state = MATCH_STATES.WAITING;
    this.startDate = null;
    this.scores = {}; // { playerId: score }
  }
}

module.exports = Match;
