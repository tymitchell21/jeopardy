function Grid (rowNum, columnNum, destination) {
    this.rowNum = rowNum
    this.columnNum = columnNum
    this.destination = destination
    this.cells = []

    console.log(this.destination)
    this.createGrid()
    this.drawGrid(destination)
}

Grid.prototype.createRow = function (row) {
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    return rowDiv
}

Grid.prototype.createGrid = function () {
    for (let row=0; row<this.rowNum; row++) {
        this.cells.push([])
        for (let column=0; column<this.columnNum; column++) {
            this.cells[row].push(new Cell(row, column, 'cell'))
        }
    }
}

Grid.prototype.findCell = function (row, column) {
    return this.cells[row][column]
}

Grid.prototype.drawGrid = function (destinationID) {
    const destination = document.getElementById(destinationID)

    for(let row=0; row<this.rowNum; row++) {
        const rowDiv = this.createRow()
        for(let column=0; column<this.columnNum; column++) {
            rowDiv.appendChild(this.findCell(row,column).element)
        }
        destination.appendChild(rowDiv)
    }
}

Grid.prototype.neighborCells = function (cell) {
    const neighborsArray = []
    const cellRow = Number(cell.element.dataset.row)
    const cellColumn = Number(cell.element.dataset.column)

    for (let neighborRow = cellRow-1; neighborRow <= cellRow+1; neighborRow++) {
        for (let neighborColumn = cellColumn-1; neighborColumn <= cellColumn+1; neighborColumn++) {
            if (neighborRow === cellRow && neighborColumn === cellColumn) continue
            if (neighborRow>=this.rowNum || neighborColumn>=this.columnNum) continue
            if (neighborRow<0 || neighborColumn<0) continue
            neighborsArray.push(this.findCell(neighborRow, neighborColumn))
        }
    }
    return neighborsArray
}

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