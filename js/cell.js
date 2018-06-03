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

Cell.prototype.changeColor = function (color) {
    balls = this.el.children;
    for (var j = 0; j < balls.length; j++) {
        balls[j].style.backgroundColor = color;
    }
}

Cell.prototype.addBall = function () {
    var ball = createBall(this.owner);
    this.el.appendChild(ball);
}

Cell.prototype.addBalls = function (n) {
    for (var i = 0; i < n; i++) {
        this.addBall();
    }
}

Cell.prototype.removeBall = function () {
    this.el.removeChild(this.getLastBall());
}
Cell.prototype.setBalls = function (num) {
    var delta = num - this.el.childNodes.length;
    if (delta > 0) {
        this.addBalls(delta);
    }
    if (delta < 0) {
        this.removeBalls(delta);
    }
}

Cell.prototype.getLastBall = function () {
    var childs = this.el.childNodes;
    return lastEl = childs[childs.length - 1];
}

Cell.prototype.removeBalls = function (n) {
    for (var i = 0; i < n; i++) {
        this.removeBall();
    }
}

