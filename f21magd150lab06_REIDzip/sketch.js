//Name: Frogger

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(20);
  
  translate(50,75);
  //Changes the center of the canvas so I don't have to manually move the frog to center
  
  //legs!
  push();
  noStroke();
  fill(0,255,0);
  drawFrog(200,130,140,15);
  drawFrog(200,165,140,15);
  drawFrog(135,115,15,45);
  drawFrog(265,115,15,45);
  drawFrog(265,180,15,45);
  drawFrog(135,180,15,45);
  
  //toes
  drawFrog(120,115,15,15);
  drawFrog(280,115,15,15);
  drawFrog(280,180,15,15);
  drawFrog(120,180,15,15);
  pop();
  
  //body (yellow!)
  push();
  noStroke();
  fill(255, 230, 0);
  drawFrog(200,150,75,100);
  drawFrog(200,150,50,125);
  pop();

  //separated all the top green details from the legs
  
  push();
  noStroke();
  fill(0,255,0);
  //bottom left stuff
  drawFrog(180,175,14,28);
  drawFrog(169,194,14,14);
  drawFrog(193,194,14,14);
  drawFrog(180,205,14,14);
  
  //bottom right stuff
  drawFrog(231,194,14,14);
  drawFrog(220,205,14,14);
  
  //top stuff
  drawFrog(193,94,14,14);
  drawFrog(176,114,28,28);
  drawFrog(224,114,28,28);
  
  //eyes
  push();
  noStroke();
  fill(225,0,175);
  drawFrog(169,107,14,14);
  drawFrog(230,107,14,14);
  pop();
  
  //road
  push();
  fill(255);
  noStroke();
  fill(255);
  drawRoad(10,10,75,20);
  drawRoad(150,10,75,20);
  drawRoad(290,10,75,20);
  drawRoad(430,10,75,20);
  pop();
  
  push();
  drawLily(300,300,65,65);
  drawLily(317,300,65,65);
  pop();
  
}
  
function drawFrog(x, y, w, h,r,t){
  push();
  translate(x,y);
  scale(r);
  rotate(t);
  rectMode(CENTER);
  rect(0,0, w, h)
  pop();
}
  
function drawRoad(x, y, w, h,r,t){
 push();
  translate(x,y);
  scale(r);
  rotate(t);
  rectMode(CENTER);
  rect(0,0, w, h)
  pop();
}
  //drawing the lilypad using scale and rotate let me shape it and then size it, and rotate it accordingly
function drawLily(x, y, w, h,r,t){
 push();
  translate(x,y);
  scale(2);
  rotate(50);
  rect(0,0, w, h)
  pop();
}