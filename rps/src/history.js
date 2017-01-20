function history(ui, repo) {
  const games = repo.fetchGames()
  if (games.length > 0) {
    ui.displayResults(games)
  } else {
    ui.noResults()
  }
}

module.exports = history