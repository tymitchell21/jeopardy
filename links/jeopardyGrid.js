function JeopardyGrid (rowNum, columnNum, destination, cellConstructor, categoryObjects, categoryContainerID) {
    this.categoryObjects = categoryObjects
    this.categoryContainerID = categoryContainerID
    this.categoriesArray = []

    Grid.call(this, rowNum, columnNum, destination, cellConstructor)

    this.createCategories()
    this.displayCategories()
    this.gameManager = new GameManager(this.categoryObjects)
}

JeopardyGrid.prototype = Object.create(Grid.prototype)
JeopardyGrid.prototype.constructor = JeopardyGrid

JeopardyGrid.prototype.createCategories = function() {
    this.categoryObjects.map((category, categoryIndex) => {
        this.categoriesArray.push(new JeopardyCell('category', categoryIndex, 'cell', this, category.title))
    })
}

JeopardyGrid.prototype.displayCategories = function() {
    this.categoriesArray.map((categoryObject, index) => {
        const categoryTextH1 = document.createElement('h1')
        categoryTextH1.innerHTML = this.categoryObjects[index].title

        categoryObject.element.appendChild(categoryTextH1)
        categoryObject.element.className = 'categoryCell'

        categoriesElement = document.getElementById(this.categoryContainerID)
        categoriesElement.appendChild(categoryObject.element)
    })
}

JeopardyGrid.prototype.addNewQuestionBox = function(rowIndex, cellIndex) {
    let answerBox = new QuestionBox(this.categoryObjects, 'answer-box', 'question-display', rowIndex, cellIndex)
}
