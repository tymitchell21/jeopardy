function QuestionBox(categoryObjects, destination, questionDisplay, row, column) {
    this.categoryObjects = categoryObjects
    this.answerBox = document.getElementById(destination)
    this.questionDisplay = document.getElementById(questionDisplay)
    this.row = row
    this.column = column
    
    this.answerBox.style.display = 'flex'
    this.questionDisplay.innerHTML = this.categoryObjects[row].clues[column].question
}