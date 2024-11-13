// Variables to track change over time
let x, y;
let angle = 0;  // variable for oscillation
let speed = 0.2;  // speed of oscillation
let r, g, b;  // color variables

function setup() {
  createCanvas(400, 400);
  // first position and random color
  x = width / 2;
  y = height / 2;
  r = int(random(255));
  g = int(random(255));
  b = int(random(255));
}

function draw() {
  background(255);
  
  // the intermediate value
  let offset = sin(angle) * 100;
  
  // Update x and y coordinates
  x = width / 2 + offset;
  y = height / 2 + offset;
  
  // Draws the circle with a random color
  fill(r, g, b);
  noStroke();
  ellipse(x, y, 50, 50);
  
  // Update angle over time
  angle += speed;
}