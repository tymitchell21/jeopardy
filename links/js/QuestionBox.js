function QuestionBox(categoryObjects, destination, questionDisplay, rowIndex, cellIndex, grid) {
    this.categoryObjects = categoryObjects
    this.answerBox = document.getElementById(destination)
    this.questionDisplay = document.getElementById(questionDisplay)
    this.rowIndex = rowIndex
    this.cellIndex = cellIndex
    this.grid = grid

    this.answerSubmitElement = document.querySelector('#submit-answer')
    this.boundCallCheckAnswerFunction = this.unboundCallCheckAnswerFunction.bind(this)
    this.answerSubmitElement.addEventListener('click', this.boundCallCheckAnswerFunction)
    
    this.answerBox.style.display = 'flex'
    this.questionDisplay.innerHTML = this.categoryObjects[rowIndex].clues[cellIndex].question
}

QuestionBox.prototype.unboundCallCheckAnswerFunction = function () {
    this.grid.gameManager.checkAnswer(this.rowIndex, this.cellIndex)
    this.answerSubmitElement.removeEventListener('click', this.boundCallCheckAnswerFunction)
}
