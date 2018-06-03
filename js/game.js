var possiblePlayers = [
    'Green', 'Red', 'Blue', 'Yellow', 'Purple'
]

function Game(nPlayers, width, height, container){
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
    explosions = {};
    depth = 0;
    handleClick(this.table, cell, explosions, depth);
    this.switchPlayer();
}
