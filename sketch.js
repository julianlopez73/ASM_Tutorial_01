/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

const foo = "P5.js";
function draw() {
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 350, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text(foo, 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
