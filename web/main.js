const React = require('react')
const ReactDom = require('react-dom')
const {play, history} = require('rps')
const GameRepo = require('persistence')

const GameForm = React.createClass({
  gameRepo: new GameRepo(),

  getInitialState() {
    return {
      html: this.gameForm(),
      history: <div>No results</div>
    }
  },

  noResults() {
    this.setState({
      history: <div>No results</div>
    })
  },

  displayResults(games) {
    this.setState({
      history: <table>
        <thead>
          <tr>
            <th>P1</th>
            <th>P2</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {
            games.map(function(game, index) {
              return (
                <tr
                  key={index}
                >
                  <td>{game.p1}</td>
                  <td>{game.p2}</td>
                  <td>{game.result}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    })
  },

  handlePlayer1Change(event) {
    this.setState({
      player1: event.target.value
    })
  },

  handlePlayer2Change(event) {
    this.setState({
      player2: event.target.value
    })
  },

  handleSubmit(event) {
    event.preventDefault()
    play(this.state.player1, this.state.player2, this, this.gameRepo)
  },

  handleShowResultsClicked() {
    history(this, this.gameRepo)
  },

  gameForm() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="player1">Player 1:</label>
          <input
            id="player1"
            type="text"
            onChange={this.handlePlayer1Change}
          />

          <br/>

          <label htmlFor="player2">Player 2:</label>
          <input
            id="player2"
            type="text"
            onChange={this.handlePlayer2Change}
          />

          <br/>

          <input
            type="submit"
            value="Play"
          />
        </form>
      </div>
    )
  },

  result(text) {
    this.setState({
      html: <div><h1>{text}</h1></div>
    })
  },

  p1Wins() {
    this.result('Winner: Player 1!')
  },

  p2Wins() {
    this.result('Winner: Player 2!')
  },

  tie() {
    this.result('It\'s a tie!')
  },

  invalidInput() {
    this.result('Invalid input')
  },

  render() {
    return (
      <div>
        {this.state.history}
        <button
          onClick={this.handleShowResultsClicked}
        >
          Show Results
        </button>
        {this.state.html}
      </div>
    )
  }
})


ReactDom.render(<GameForm/>, document.getElementById('app'))