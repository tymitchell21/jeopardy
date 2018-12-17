function JeopardyGrid (rowNum, columnNum, destination, cellConstructor, categoryObjects) {
    Grid.call(this, rowNum, columnNum, destination, cellConstructor)

    this.categoryObjects = categoryObjects
}

JeopardyGrid.prototype = Object.create(Grid.prototype)