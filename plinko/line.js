function Line(x, y, w, h) {
    var options = {
        isStatic: true,
    }
this.body = Bodies.rectangle(x, y, w, h, options);
this.body.friction = 1;
this.w = w;
this.h = h;
Composite.add(world, this.body);

this.show = function() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke()
    fill((255))
    rect(0,0, this.w, this.h);
    pop();
    }
}

