const play = require('../src/play')
const FakeGamesRepo = require('./fakeGamesRepo')

describe("play", function () {
  let ui
  let repo

  beforeEach(function () {
    ui = jasmine.createSpyObj("ui", ["tie", "p1Wins", "p2Wins", "invalidInput"])
    repo = new FakeGamesRepo()
  })

  it("paper v. scissors: p2 wins", function () {
    play("paper", "scissors", ui, repo)

    expect(ui.p2Wins).toHaveBeenCalled()
  })

  it("scissors v. paper: p1 wins", function () {
    play("scissors", "paper", ui, repo)

    expect(ui.p1Wins).toHaveBeenCalled()
  })

  it("paper v. rock: p1 wins", function () {
    play("paper", "rock", ui, repo)

    expect(ui.p1Wins).toHaveBeenCalled()
  })

  it("rock v. paper: p2 wins", function () {
    play("rock", "paper", ui, repo)

    expect(ui.p2Wins).toHaveBeenCalled()
  })

  it("rock v. rock: tie", function () {

    play("rock", "rock", ui, repo)

    expect(ui.tie).toHaveBeenCalled()
  })

  it("rock v. scissors: p1 wins", function () {
    play("rock", "scissors", ui, repo)

    expect(ui.p1Wins).toHaveBeenCalled()
  })

  it("scissors v. rock: p2 wins", function () {
    play("scissors", "rock", ui, repo)

    expect(ui.p2Wins).toHaveBeenCalled()
  })

  it("sailboat v. rock", function () {
    play("sailboat", "rock", ui, repo)

    expect(ui.invalidInput).toHaveBeenCalled()
  })

  it("rock v. sailboat", function () {
    play("rock", "sailboat", ui, repo)

    expect(ui.invalidInput).toHaveBeenCalled()
  })

  it("sailboat v. sailboat", function () {
    play("sailboat", "sailboat", ui, repo)

    expect(ui.invalidInput).toHaveBeenCalled()
    expect(ui.tie).not.toHaveBeenCalled()
  })
})