const categoryIDs = [2124, 309, 554, 1371, 4616, 254]
const categoryFetchURL = 'http://www.jservice.io/api/category?id='

const categoryPromises = categoryIDs
    .map(id =>
        fetch(categoryFetchURL + id)
            .then(categoryObject => categoryObject.json())
    )

Promise.all(categoryPromises).then(function(categoryObjects) {
    
    let jeopardyGrid = new JeopardyGrid(6, 5, 'questions', undefined, categoryObjects, 'categories')

    jeopardyGrid.cells.map((row,rowIndex) => {
        row.map((cell, cellIndex) => {
            const value = document.createElement('a')
            value.innerHTML = jeopardyGrid.categoryObjects[rowIndex].clues[cellIndex].value
            cell.element.appendChild(value)

            cell.element.addEventListener('click', () => {
                cell.element.innerHTML = 'clicked bitch'
            })
        })
    })
})
