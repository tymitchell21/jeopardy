class QuestionBox {
    constructor(categoryObjects, destination, questionDisplay, rowIndex, cellIndex, grid) {
        this.categoryObjects = categoryObjects;
        this.rowIndex = rowIndex;
        this.cellIndex = cellIndex;
        this.grid = grid;
        this.createElements(destination, questionDisplay)
    }

    createElements (destination, questionDisplay) {
        this.answerBoxElement = document.getElementById(destination);
        this.answerBoxElement.style.display = 'flex';

        this.questionDisplayElement = document.getElementById(questionDisplay);
        this.questionDisplayElement.innerHTML = this.categoryObjects[this.rowIndex].clues[this.cellIndex].question;

        this.submitButtonElement = document.getElementById('submit-form');
        this.boundCallCheckAnswerFunction = this.unboundCallCheckAnswerFunction.bind(this);
        this.submitButtonElement.addEventListener('submit', this.boundCallCheckAnswerFunction);
    }

    unboundCallCheckAnswerFunction() {
        this.grid.gameManager.checkAnswer(this.rowIndex, this.cellIndex);
        this.submitButtonElement.removeEventListener('click', this.boundCallCheckAnswerFunction);
        event.preventDefault()
    }
}


