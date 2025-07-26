const { v4: uuidv4 } = require('uuid');

class Match {
  constructor({ name }) {
    this.id = uuidv4();
    this.name = name;
    this.players = []; // máximo de 4 jogadores
    this.state = 'waiting'; // waiting | in_progress | finished
    this.startDate = null;
    this.scores = {}; // { playerId: score }
  }
}

module.exports = Match;
