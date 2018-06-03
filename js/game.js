var possiblePlayers = [
    'Green', 'Red', 'Blue', 'Yellow', 'Purple'
]

function Game(nPlayers, width, height, container){
    // var table = new Table(width, height);
    this.table = new Table(width, height, this.handleState.bind(this));
    container.appendChild(this.table.el);
    this.players = possiblePlayers.slice(0, nPlayers);
    this.currentPlayerIndex = 0;
}

Game.prototype.currentPlayer = function() {
    return this.players[this.currentPlayerIndex % this.players.length];
}

Game.prototype.switchPlayer = function() {
    this.currentPlayerIndex++;
}

Game.prototype.handleState = function(cell) {
    if (!cell.owner) {
        cell.owner = this.currentPlayer();
    }
    if (cell.owner !== this.currentPlayer()) {
        return
    }
    explode(this.table, cell)
    this.switchPlayer();
}
