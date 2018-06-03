var possiblePlayers = [
    'Green', 'Red', 'Blue', 'Yellow', 'Purple'
]

function Game(nPlayers, width, height, container) {
    this.table = new Table(width, height, this.handleState.bind(this));
    container.appendChild(this.table.el);
    this.players = possiblePlayers.slice(0, nPlayers);
    this.currentPlayerIndex = 0;
}

Game.prototype.currentPlayer = function () {
    return this.players[this.currentPlayerIndex % this.players.length];
}

Game.prototype.switchPlayer = function () {
    this.currentPlayerIndex++;
}

Game.prototype.handleState = function (cell) {
    if (!cell.owner) {
        cell.owner = this.currentPlayer();
    }
    if (cell.owner !== this.currentPlayer()) {
        return
    }
    var explosionsOrder = {};
    handleClick(this.table, cell, explosionsOrder, 0);
    console.log(explosionsOrder);
    if (!explosionsOrder[0]) {
        this.table.cells.forEach(function (cell) {
            cell.setBalls(cell.balls);
        })
    } else {
        handleAnimations(this.table, explosionsOrder);
    }
    this.switchPlayer();
}

function handleAnimations(table, explosionsOrder) {
    for (var depth = 0; !!explosionsOrder[depth]; depth++) {
        setTimeout(function (cells) {
            return function () {
                cells.forEach(function (cell) {
                    cell.addBall(); // explosion ball
                    var neighbours = table.getNeighbours(cell);
                    neighbours.forEach(function (neighbour) {
                        neighbour.owner = cell.owner;
                        moveBall(cell, neighbour);
                    });
                    cell.owner = undefined;
                });
            }
        }(explosionsOrder[depth]), 1000 * depth);
    }
}

function moveBall(from, to) {
    to.el.appendChild(from.getLastBall());
}