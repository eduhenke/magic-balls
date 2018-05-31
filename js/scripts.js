window.onload = init;

function init() {
    var width = 5;
    var height = 4;
    var container = document.getElementById("game");
    container.appendChild(createTable(width, height));
    Cell();
}

function cellClickHandler(cell) {
    return function() {
        cell.addBall();
    }
}

function createTable(width, height) {
    var gameTable = document.createElement("TABLE");

    for (var i = 0; i < height; i++) {
        var row = gameTable.insertRow(i);

        for (var j = 0; j < width; j++) {
            var cellElement = row.insertCell(j);
            cell = new Cell(i, j, cellElement);
            cellElement.onclick = cellClickHandler(cell);
        }
    }
    return gameTable;
}

