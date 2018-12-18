function Player(name, score, scoreID) {
    this.name = name
    this.score = score
    this.scoreElement = document.getElementById(scoreID)
}

Player.prototype.updateScore = function() {
    this.scoreElement.innerHTML = this.score
}