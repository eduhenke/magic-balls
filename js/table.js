function Table(width, height) {
    var rows = [];
    var tableEl = document.createElement("TABLE");

    for (var i = 0; i < height; i++) {
        var row = tableEl.insertRow(i);
        rows[i] = [];
        for (var j = 0; j < width; j++) {
            var cellElement = row.insertCell(j);
            cell = new Cell(i, j, cellElement);
            rows[i][j] = cell;
            cellElement.onclick = cellClickHandler(cell);
        }
    }
    this.el = tableEl;
    this.rows = rows;
}

Table.prototype.getNeighbours = function(x, y) {
    var neighbours = [],
        upRow = this.rows[y - 1],
        downRow = this.rows[y + 1],
        row = this.rows[y],
        rightCell = row[x + 1],
        leftCell = row[x - 1];
    if (upRow) {
        upCell = upRow[x];
        if (upCell) {
            neighbours.push(upCell);
        }
    }
    if (downRow) {
        downCell = downRow[x];
        if (downCell) {
            neighbours.push(downCell);
        }
    }
    if (rightCell) {
        neighbours.push(rightCell);
    }
    if (leftCell) {
        neighbours.push(leftCell);
    }
    return neighbours;
}

function cellClickHandler(cell) {
    return function () {
        cell.addBall();
    }
}

