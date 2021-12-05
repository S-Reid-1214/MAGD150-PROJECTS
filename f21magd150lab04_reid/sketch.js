function setup() {
  createCanvas(400, 400);
  colorMode(RGB,100);
}

function draw() {
  background(50);
  
  push();
  let a = color(230,80,0);
  noStroke();
  fill(a);
  triangle(93,106, 277,106, 192,324)
  pop();
  
  push();
  let b = color(230,40,0);
  noStroke();
  fill(b);
  rect(90,75, 190,40);
  pop();

  push();
 if (mouseIsPressed) {
    fill(255, 0, 0);
    noStroke();
    ellipse(175,225,25,25);
    ellipse(150,150,25,25);
    ellipse(235,165,25,25);
    }
  pop();
  
  push();
  fill(255,0,0);
  noStroke();
  ellipse(mouseX,mouseY,25,25);
  pop();
  
  
  push();
   if (keyIsPressed === true) {
     fill(255, 0, 0);
  } else {
    fill(200,80,0);
  }
 noStroke();
  ellipse(195, 275, 25, 25);
  pop();
  
  var x = 0;
  
  
  while (x <= height) {
  rect(187, x, 10, 10);
    fill(100);
    noStroke();
  x= x + 25
    
    
  }
  


}

var y= (230,80,0)
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}