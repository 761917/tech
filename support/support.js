var img;
var song;
function preload()
{
  img=loadImage("data/tech.jpg");
  song=loadSound("data/dialup.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  textSize(48);
  song.loop();
}

function draw() {
  background(frameCount%255,frameCount%510-255,frameCount%765-510);
  image(img,width/2,height/2);
  fill(random(255),random(255),random(255));
  text("Have you tried turning it off",width/2,height/5);
  text("and turning it back on?",width/2,height*4/5);
}
function windowResized()
{
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  textSize(48);
}