function Table(width, height) {
    var rows = [];
    var tableEl = document.createElement("TABLE");
    players = ['Green', 'Red', 'Blue', 'Yellow', 'Purple'].slice(0, nPlayers);
    index = 0
    for (var y = 0; y < height; y++) {
        var row = tableEl.insertRow(y);
        rows[y] = [];
        for (var x = 0; x < width; x++) {
            var cellElement = row.insertCell(x);
            cell = new Cell(x, y, cellElement);
            rows[y][x] = cell;
            cellElement.onclick = cellClickHandler(this, cell);
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



function switchPlayer() {
  if (index < nPlayers - 1) {
    index += 1;
  }
  else {
    index = 0;
  }
}

function explode(table, cell) {
    var neighbours = table.getNeighbours(cell.x, cell.y);
    var threshold = neighbours.length;
    if (cell.balls >= threshold) {
        cell.removeBalls(threshold);
        neighbours.forEach(cell => {
            cell.addBall(players[index]);
            explode(table, cell);
        });
      }
}

function cellClickHandler(table, cell) {
    return function () {
        cell.addBall(players[index]);
        explode(table, cell);
        switchPlayer();
        }
    }
