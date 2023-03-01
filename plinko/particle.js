function Particle(x,y,r) {
    var options = {
        restitution: 0.2547825,
        friction: 0,
        collisionFilter: {
            mask: peg | sensor,
            group: -1,
          }
    }
    this.r = r;
    this.body = Bodies.circle(x,y,r, options);
    this.body.label = "particle";
    Composite.add(world, this.body);
}
Particle.prototype.create = function() {
    var position = this.body.position;
    push();
    stroke(('#d4af37'))
    fill(('#e0c56e'))
    translate(position.x, position.y);
    ellipse(0,0, this.r * 2);
    pop();
}
