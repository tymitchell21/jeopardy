function Cell (row, column,className) {
    this.row = row
    this.column = column
    this.className = className
    this.element = this.createCell()
}

Cell.prototype.createCell = function () {
    const newCell = document.createElement('div')

    newCell.dataset.row = this.row
    newCell.dataset.column = this.column

    newCell.classList.add(this.className)

    return newCell
}

Cell.prototype.changeClass = function (oldClass, newClass) {
    this.className = newClass
    this.element.classList.remove(oldClass)
    this.element.classList.add(newClass)
}