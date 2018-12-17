function JeopardyGrid (rowNum, columnNum, destination, categoryObjects) {
    Grid.call(this, rowNum, columnNum, destination)

    this.categoryObjects = categoryObjects
}

JeopardyGrid.prototype = Object.create(Grid.prototype)