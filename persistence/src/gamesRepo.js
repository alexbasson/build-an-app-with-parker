function GamesRepo() {
  this.games = []

  this.fetchGames = function () {
    return this.games
  }

  this.saveGame = function(game) {
    this.games.push(game)
  }
}

module.exports = GamesRepo