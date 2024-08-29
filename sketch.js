function setup() {
    createCanvas(400, 400);
    background("pink");
  }
  
  function draw() {
    stroke("green");
    fill("red");
    if(mouseIsPressed)
  rect(mouseX, mouseY, 20, 45);
  }