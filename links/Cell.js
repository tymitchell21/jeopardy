function Cell (rowIndex, cellIndex, className, grid) {
    this.rowIndex = rowIndex
    this.cellIndex = cellIndex
    this.className = className
    this.grid = grid
    
    this.createCell()
}

Cell.prototype.createCell = function () {
    this.element = document.createElement('div')

    this.element.dataset.rowIndex = this.rowIndex
    this.element.dataset.cellIndex = this.cellIndex

    this.element.classList.add(this.className)

    return this.element
}

Cell.prototype.changeClass = function (oldClass, newClass) {
    this.className = newClass
    this.element.classList.remove(oldClass)
    this.element.classList.add(newClass)
}