function GameManager(categoryObjects) {
    this.categoryObjects = categoryObjects
    this.player1 = new Player('Player1', 0, 'player1-score')
    this.player2 = new Player('Player2', 0, 'player2-score')

    this.whoseTurn = 'one'
}