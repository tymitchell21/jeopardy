function JeopardyCell (row, column, className) {
    Cell.call(this, row, column, className)
}

JeopardyCell.prototype = Object.create(Cell.prototype)

JeopardyCell.prototype.createCell = function () {
    const newCell = document.createElement('div')

    newCell.dataset.row = this.row
    newCell.dataset.column = this.column

    newCell.classList.add(this.className)

    return newCell
}