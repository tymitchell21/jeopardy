function JeopardyGrid (rowNum, columnNum, destination, cellConstructor, categoryObjects, categoryDestination) {
    Grid.call(this, rowNum, columnNum, destination, cellConstructor)

    this.categoryObjects = categoryObjects
    this.categoryDestination = categoryDestination

    this.categoriesArray = []

    this.createCategories()
    this.displayCategories()
}

JeopardyGrid.prototype = Object.create(Grid.prototype)

JeopardyGrid.prototype.createCategories = function() {
    this.categoryObjects.map((category, categoryIndex) => {
        this.categoriesArray.push(new JeopardyCell('category', categoryIndex, 'cell', category.title))
    })
}

JeopardyGrid.prototype.displayCategories = function() {
    console.log(this.categoriesArray)
    this.categoriesArray.map((categoryObject, index) => {
        const categoryTextH1 = document.createElement('h1')
        categoryTextH1.innerHTML = this.categoryObjects[index].title

        categoryObject.element.appendChild(categoryTextH1)
        categoryObject.element.className = 'categoryCell'

        categoriesElement = document.getElementById(this.categoryDestination)
        categoriesElement.appendChild(categoryObject.element)
    })
}

