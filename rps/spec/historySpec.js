const history = require('../src/history')
const play = require('../src/play')
const FakeGamesRepo = require('./fakeGamesRepo')

describe('history', function() {
  let ui
  let repo

  beforeEach(function () {
    ui = jasmine.createSpyObj("ui", ["noResults", "tie", "displayResults"])
    repo = new FakeGamesRepo()
  })

  describe('when there are no results', function () {
    it("notifies the ui that there were no results", function () {
      history(ui, repo)

      expect(ui.noResults).toHaveBeenCalled()
      expect(ui.displayResults).not.toHaveBeenCalled()
    })
  })

  describe('when there are results', function () {
    it("notifies the ui that there were results and provides those results", function () {
      play("rock", "rock", ui, repo)

      history(ui, repo)

      expect(ui.displayResults).toHaveBeenCalled()
      expect(ui.noResults).not.toHaveBeenCalled()
    })
  })
})