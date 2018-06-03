function Table(width, height, handleState) {
    var rows = [];
    var tableEl = document.createElement("TABLE");
    for (var y = 0; y < height; y++) {
        var row = tableEl.insertRow(y);
        rows[y] = [];
        for (var x = 0; x < width; x++) {
            var cellElement = row.insertCell(x);
            var cell = new Cell(x, y, cellElement);
            rows[y][x] = cell;
            cellElement.onclick = function (cell) {
                return function () {
                    handleState(cell);
                }
            }(cell);
        }
    }
    this.el = tableEl;
    this.rows = rows;
}

Table.prototype.getNeighbours = function (x, y) {
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

function colorCells(color, cells) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].changeColor(color);
    }
}

function handleClick(table, cell, explosions, depth) {
    depth++;
    cell.addBall();
    var neighbours = table.getNeighbours(cell.x, cell.y);
    var threshold = neighbours.length;
    if (cell.balls >= threshold) {
        explode();
    }

    function explode() {
        if (!explosions[depth]) {
            explosions[depth] = [];
        }
        explosions[depth].push(cell);
        cell.removeBalls(threshold);
        triggerNeighbours();
        if (cell.balls == 0) {
            cell.owner = undefined;
        }
    }
    function triggerNeighbours() {
        neighbours.forEach(function(n) {
            n.owner = cell.owner;
            handleClick(table, n, explosions, depth);
            colorCells(cell.owner, neighbours);
        });
    }
}

