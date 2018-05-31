window.onload = init;

function init() {
    var width = 9;
    var height = 8;
    var container = document.getElementById("game");
    container.appendChild(createTable(width, height));
}

function createTable(width, height) {
    var gameTable = document.createElement("TABLE");

    for (var i = 0; i < height; i++) {
        var row = gameTable.insertRow(i);

        for (var j = 0; j < width; j++) {
            row.insertCell(j).innerHTML = "X";
        }
    }
    return gameTable;
}
