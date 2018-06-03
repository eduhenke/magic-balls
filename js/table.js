function Table(width, height, stateHandler) {
    var rows = [];
    var tableEl = document.createElement("TABLE");
    for (var y = 0; y < height; y++) {
        var row = tableEl.insertRow(y);
        rows[y] = [];
        for (var x = 0; x < width; x++) {
            var cellElement = row.insertCell(x);
            var cell = new Cell(x, y, cellElement);
            rows[y][x] = cell;
            cellElement.onclick = function() {
                return function() {
                    stateHandler(cell);
                }
            }(cell);
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

function createBall(color) {
    var el = document.createElement("SPAN");
    el.className = "ball";
    el.style.backgroundColor = color;
    return el
}

function colorCells(color, neighbours){
    for (var i = 0; i < neighbours.length; i++){
        neighbours[i].changeColor(color)
    }
}

function explode(table, cell) {
    cell.addBall();
    var neighbours = table.getNeighbours(cell.x, cell.y);
    var threshold = neighbours.length;
    if (cell.balls >= threshold) {
        cell.removeBalls(threshold);
        neighbours.forEach(n => {
            n.owner = cell.owner;
            explode(table, n);
            colorCells(cell.owner, neighbours);
        });
        if (cell.balls == 0) {
            cell.owner = undefined;
        }
    }
}

