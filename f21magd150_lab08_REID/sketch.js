//I had help from "The Coding Train" on YouTube with how to insert images!

let img;
let crest;
let creep;
let bree;
let caps;
let capnum;

function preload() {
  img = loadImage('veloci.png');
  crest = loadImage('doc.png');
}

function setup() {
  createCanvas(400, 500);
  caps = loadStrings('captions.txt');
  capnum = int(random(0, 4));
  creep = loadFont('Creepster.ttf');
  bree = loadFont('breeserif.ttf');
}

function draw() {
  background(0);
  
  push();
  tint(170);
  image(crest,0,0,400,500);
  pop();
  
  push();
  img.filter(GRAY);
  image (img,75,100);
  pop();
  
  push();
  fill(255);
  textAlign(CENTER);
  textFont(creep);
  textSize(75);
  text('Velocidoctor', 200, 100);
  pop();
  
  push();
  fill(255);
  textAlign(CENTER);
  textFont(bree);
  textSize(30);
  text(caps[capnum], 200, 450);
  pop();
  
}

function textTimer(){
  push();
  fill(255);
  textAlign(CENTER);
  textFont(bree);
  textSize(30);

  text(caps[capnum], 200, 450);
  pop();

}

function textTimer(){
  if (frameCount%180 == 0){
    capnum++;
    }
    if (capnum > 3){
      capnum = 0;
    }
  }