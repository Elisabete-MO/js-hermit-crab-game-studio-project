const MATCH_STATES = require('../constants/matchStates');
const { v4: uuidv4 } = require('uuid');

class Match {
  constructor({ name }) {
    this.id = uuidv4();
    this.players = []; // máximo de 4 jogadores
    this.state = MATCH_STATES.WAITING;
    this.createdDate = new Date;
    this.scores = {}; // { playerId: score }
  }
}

module.exports = Match;
