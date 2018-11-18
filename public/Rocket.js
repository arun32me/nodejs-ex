class Rocket {
    constructor(loc) {
        this.loc = loc;
        this.velocity = createVector(0.1, 0);
        this.speed = createVector(0, 0);
    }
    show() {
        fill(150);
        angleMode(DEGREES);
        push();
        rectMode(CENTER);
        translate(this.loc.x, this.loc.y);
        rotate(90);
        rect(0, 0, 20, 50);
        // triangle(this.loc.x, this.loc.y, this.loc.x + 20, this.loc.y, this.loc.x + 10, this.loc.y - 30);
        pop();
    }
    update() {
        this.speed.add(this.velocity);
        if(this.speed.x > 3) {
            this.speed.x = 3;
        }
        if(this.speed.y > 3) {
            this.speed.y = 3;
        }
        if(this.speed.x < -3) {
            this.speed.x = -3;
        }
        if(this.speed.y < -3) {
            this.speed.y = -3;
        }

        this.loc.add(this.speed);
    }
    applyForce(f) {
        this.velocity.add(f);
    }
}