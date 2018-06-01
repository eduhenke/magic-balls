window.onload = init;

function init() {
    var width = 5;
    var height = 4;
    var container = document.getElementById("game");
    var foundSubmit = document.getElementById("btnSubmit");
    var foundPlayers = document.getElementById("numberPlayers");
    foundSubmit.onclick = function(){
        window.nPlayers = foundPlayers.value;
        table = new Table(width, height);
        container.appendChild(table.el);
    }

}
