function Peg(x,y,r) {
    var options = {
        restitution: 0,
        friction: 0,
        isStatic: true,
          collisionFilter: {
                    category: peg,
                    group: 1
                }
        }
    this.r = r;
    this.body = Bodies.circle(x,y,r, options);
    this.body.label = "peg";
    Composite.add(world, this.body);
}

Peg.prototype.create = function() {
    var position = this.body.position;
    push();
        stroke('white')
        strokeWeight(0.5);
        fill('white')
    translate(position.x, position.y);
    ellipse(0,0, this.r * 1.5);
    pop();
}