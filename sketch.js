function setup() {
    createCanvas(960, 540);
    background('#FFCCF5');
}

function draw() {
    s = random(1, 10);
    x = random(0, width);
    y = random(0, height);
    stroke(255);
    strokeWeight(s);
    point(x, y);
}
