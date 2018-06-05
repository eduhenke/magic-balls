window.onload = init;

function init() {
    var width = 5;
    var height = 4;
    var container = document.getElementById("game");
    var buttonSubmit = document.getElementById("btnSubmit");
    var buttonReset = document.getElementById("btnReset"); 
    buttonSubmit.onclick = function () {
        var nPlayers = document.getElementById("numberPlayers").value;
        var game = new Game(nPlayers, width, height, container);
    }
    buttonReset.onclick = function () {
        resetGame(buttonReset);
    }

}
