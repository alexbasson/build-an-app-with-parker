const FakeGamesRepo = require('./../../../spec/fakeGamesRepo')
const GameRepo = require('../../../../persistence/src/gamesRepo')

function gamesRepoContract(GameRepo) {
  describe('GamesRepo', function () {
    let repo;

    beforeEach(function () {
      repo = new GameRepo()
    })

    describe('when there are games', function () {
      it('saves the games', function () {
        const game = {
          p1: 'rock',
          p2: 'scissors',
          result: 'p1 wins'
        }
        repo.saveGame(game)

        const games = repo.fetchGames()

        expect(games).toEqual([game])
      })
    })

    describe('when there are no games', function () {
      it('returns an empty array', function () {
        expect(repo.fetchGames()).toEqual([])
      })
    })

  })
}

module.exports = gamesRepoContract
