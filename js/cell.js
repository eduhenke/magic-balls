function Cell(x, y, el, owner) {
    this.x = x;
    this.y = y;
    this.el = el;
    this.balls = 0;
    this.owner = owner;
}

function createBall(color) {
    var el = document.createElement("SPAN");
    el.className = "ball";
    el.style.backgroundColor = color;
    return el
}

Cell.prototype.changeCollor = function (color) {
    var balls = document.getElementsByTagName("SPAN")
    n = balls.length;
    for (var i = 0; i < n; i++){
        balls[i].style.backgroundColor = color;
    }
}

Cell.prototype.addBall = function (color) {
    this.balls++;
    var ball = createBall(color);
    this.el.appendChild(ball);
}

Cell.prototype.removeBall = function () {
    this.balls--;
    var childs = this.el.childNodes;
    var lastEl = childs[childs.length - 1];
    this.el.removeChild(lastEl);
}

Cell.prototype.removeBalls = function (n) {
    for (var i = 0; i < n; i++) {
        this.removeBall();
    }
}

