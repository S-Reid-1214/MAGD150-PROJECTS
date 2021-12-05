//Meant to simulate a silly funhouse mirror and play around with

var video;
var song;
var sound;
var amplitude;


//Help from the Coding Train for both camera and audio setup!

function preload(){
  song = loadSound("Meatball_Parade.mp3");
  //Song is "Meatball Parade" by Kevin Macleod
  
}

function setup() {
  let cnv = createCanvas(400,500);
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
  
  song.play();
  song.setVolume(0.5);
  //allows song to play when opened
  
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
}

function draw() {
  background(225);
 
  image(video,0,0,mouseX,mouseY);
  //allows the mirror to have a funhouse effect along with the mouse!
  
  //mirror glints being affected by the music-help from amplitude example on p5 website
  push();
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  noStroke();
  fill(200);
  rect(50, 50, size, size);
  rect(200,400,size,size);
  pop();
  
  push();
  noFill();
  stroke(1);
  rect(0,0,mouseX,mouseY);
  pop();
  
}

function togglePlay() {
  if (song.isPlaying() ){
    song.pause();
  } else {
    song.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(song);
    //Allows mouse click to turn music and glints on/off
  }
}