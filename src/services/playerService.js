const players = require('../database/playerStorage');
const Player = require('../models/playerModel');

class PlayerService {
  createPlayer(data) {
    const newPlayer = new Player(data);
    players.push(newPlayer);
    return newPlayer;
  }

  getAllPlayers() {
    return players;
  }

  getPlayerById(id) {
    return players.find(p => p.id === id);
  }

  updatePlayer(id, data) {
    const player = this.getPlayerById(id);
    if (!player) throw new Error('Player not found');
    Object.assign(player, data);
    return player;
  }

  deletePlayer(id) {
    const index = players.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Player not found');
    players.splice(index, 1);
  }
}

module.exports = new PlayerService();
