function setup() {
  createCanvas(800, 800);
   background("#130303(0;0;0;0.95)");
}

function draw() {
  fill("violet");
  if(mouseIsPressed)
 rect(mouseX,mouseY,20,35);
  stroke("purple");
}