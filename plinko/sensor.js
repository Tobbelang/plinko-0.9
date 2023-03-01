function Sensor(x, y, w, h, hex) {
    var options = {
        isStatic: true,
        fill: hex,
        collisionFilter: {
            category: sensor,
            group: 1,
        }
    }
this.body = Bodies.rectangle(x, y, w, h, options);
this.body.friction = 1;

this.w = w;
this.h = h;
this.body.label = "sensor";
Composite.add(world, this.body);

this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    noStroke()
    fill((hex))
    rotate(angle);
    rect(0,0, this.w, this.h);
    pop();
    }
}

