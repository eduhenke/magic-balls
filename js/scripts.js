window.onload = init;

function init() {
    var width = 5;
    var height = 4;
    var container = document.getElementById("game");
    table = new Table(width, height);
    container.appendChild(table.el);
}