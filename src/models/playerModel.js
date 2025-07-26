const { v4: uuidv4 } = require('uuid');

class Player {
  constructor({ name, nickname, email }) {
    this.id = uuidv4();
    this.name = name;
    this.nickname = nickname;
    this.email = email;
    this.matchId = null; // começa sem estar em partida
  }
}

module.exports = Player;