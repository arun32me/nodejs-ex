let path;
let rocket;
function setup() {
    createCanvas(1200, 600);
    path = new Path(createVector(100, 100), createVector(1100, 300));
    rocket = new Rocket(createVector(200, 300));
}
function draw() {
    background(200);
    path.show();
    rocket.show();
    rocket.update();
}