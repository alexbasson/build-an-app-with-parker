function play(p1, p2, ui, repo){
  new PlayUseCase(p1, p2, ui, repo).execute()
}

const PlayUseCase = function(p1, p2, ui, repo){
  this.execute = function(){
    if (invalid()){
      repo.saveGame({p1: p1, p2: p2, result: 'invalid'})
      ui.invalidInput()
    } else if (tie()){
      repo.saveGame({p1: p1, p2: p2, result: 'tie'})
      ui.tie()
    } else if (playerOneWins()) {
      repo.saveGame({p1: p1, p2: p2, result: 'p1'})
      ui.p1Wins()
    } else {
      repo.saveGame({p1: p1, p2: p2, result: 'p2'})
      ui.p2Wins()
    }
  }

  function playerOneWins() {
    return p1 == "rock" && p2 == "scissors" ||
      p1 == "paper" && p2 == "rock" ||
      p1 == "scissors" && p2 == "paper";
  }

  function tie() {
    return p1 === p2;
  }

  function invalid() {
    var validInputs = ["rock", "paper", "scissors"]

    return !validInputs.includes(p1) || !validInputs.includes(p2);
  }
}

module.exports = play