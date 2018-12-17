function JeopardyCell (row, column, className, categoryTitle) {
    Cell.call(this, row, column, className)

    this.categoryTitle = categoryTitle
    this.element = this.createCell()
}

JeopardyCell.prototype = Object.create(Cell.prototype)

JeopardyCell.prototype.createCell = function () {
    const newCell = document.createElement('div')

    newCell.dataset.row = this.row
    newCell.dataset.column = this.column
    newCell.dataset.category = this.categoryTitle

    newCell.classList.add(this.className)

    return newCell
}