class Path {
    constructor(start, end) {
        this.loc = createVector(100, 100);
        this.start = start;
        this.end = end;
    }
    show() {
        stroke(0);
        beginShape();
            vertex(this.start.x, this.start.y);
            vertex(this.end.x, this.end.y);
        endShape();
        // line(this.start.x+50, this.start.y,this.end.x, this.end.y);
    }
}