const gamesRepoContract = require('../src/rps/contracts/gamesRepoContract')
const FakeGamesRepo = require('./fakeGamesRepo')

gamesRepoContract(FakeGamesRepo)