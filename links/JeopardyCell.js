function JeopardyCell(rowIndex, cellIndex, className, grid, categoryTitle = null) {
    this.categoryTitle = categoryTitle
    Cell.call(this, rowIndex, cellIndex, className, grid)
}

JeopardyCell.prototype = Object.create(Cell.prototype)
JeopardyCell.prototype.constructor = JeopardyCell

JeopardyCell.prototype.createCell = function () {
    Cell.prototype.createCell.call(this)

    if (this.categoryTitle) {
        this.element.dataset.category = this.categoryTitle
    } else {
        const value = document.createElement('a')
        const category = this.grid.categoryObjects[this.rowIndex]
        value.innerHTML = category.clues[this.cellIndex].value
        this.element.appendChild(value)

        this.onClickBound = this.onClickUnbound.bind(this)
        this.element.addEventListener('click', this.onClickBound)
    }
    return this.element
}

JeopardyCell.prototype.onClickUnbound = function () {
    this.grid.addNewQuestionBox(this.rowIndex, this.cellIndex)
    this.element.removeEventListener('click', this.onClickBound)
}