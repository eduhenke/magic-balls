function Cell(x,y,el,owner) {
    this.x = x;
    this.y = y;
    this.el = el;
    this.balls = 0;
    this.owner = owner;
}

function createBall() {
    var el = document.createElement("SPAN");
    el.className = "ball";
    return el
}

Cell.prototype.addBall = function(){
    this.balls++;
    var ball = createBall();
    this.el.appendChild(ball);
}