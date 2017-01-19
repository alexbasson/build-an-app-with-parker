function play(p1, p2, ui){
    new PlayUseCase(p1, p2, ui).execute()
}

const PlayUseCase = function(p1, p2, ui){
    this.execute = function(){
        if (invalid()){
            ui.invalidInput()
        } else if (tie()){
            ui.tie()
        } else if (playerOneWins()) {
            ui.p1Wins()
        } else {
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

describe("rock paper scissors", function () {
    let ui

    beforeEach(function () {
        ui = jasmine.createSpyObj("ui", ["tie", "p1Wins", "p2Wins", "invalidInput"])
    })

    it("paper v. scissors: p2 wins", function(){
        play("paper", "scissors", ui)

        expect(ui.p2Wins).toHaveBeenCalled()
    })

    it("scissors v. paper: p1 wins", function(){
        play("scissors", "paper", ui)

        expect(ui.p1Wins).toHaveBeenCalled()
    })

    it("paper v. rock: p1 wins", function(){
        play("paper", "rock", ui)

        expect(ui.p1Wins).toHaveBeenCalled()
    })

    it("rock v. paper: p2 wins", function(){
        play("rock", "paper", ui)

        expect(ui.p2Wins).toHaveBeenCalled()
    })

    it("rock v. rock: tie", function () {

        play("rock", "rock", ui)

        expect(ui.tie).toHaveBeenCalled()
    })

    it("rock v. scissors: p1 wins", function(){
        play("rock", "scissors", ui)

        expect(ui.p1Wins).toHaveBeenCalled()
    })

    it("scissors v. rock: p2 wins", function(){
        play("scissors", "rock", ui)

        expect(ui.p2Wins).toHaveBeenCalled()
    })

    it("sailboat v. rock", function () {
        play("sailboat", "rock", ui)

        expect(ui.invalidInput).toHaveBeenCalled()
    })

    it("rock v. sailboat", function () {
        play("rock", "sailboat", ui)

        expect(ui.invalidInput).toHaveBeenCalled()
    })

    it("sailboat v. sailboat", function(){
        play("sailboat", "sailboat", ui)

        expect(ui.invalidInput).toHaveBeenCalled()
        expect(ui.tie).not.toHaveBeenCalled()
    })

})