window.onload = init;

function init() {
    var width = 5;
    var height = 4;
    var container = document.getElementById("game");
    var buttonSubmit = document.getElementById("btnSubmit");
    var buttonReset = document.getElementById("btnReset");
    var numPlayers = document.getElementById("numberPlayers").value;
    buttonSubmit.onclick = function () {
        var game = new Game(numPlayers, width, height, container);
    }
    buttonReset.onclick = function () {
        resetGame(buttonReset);
    }

}
