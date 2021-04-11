//remake of http://carlosbergen.com/

const width=400,height=400;
const BG='#edecef';
let flag=1;

function setup() {
  //createCanvas(width,height);
  var canvas = createCanvas(width,height);
  canvas.parent('sketch-holder')
  background(BG);
  noStroke();
  frameRate(60);
  noCursor();
}

function draw() {
  if (mouseX && mouseY && flag) {  // prevents initiated @ 0,0 issue
    fill('#ffffbd55');
    triangle(0,height,width/2,height,mouseX,mouseY);
    fill('#ffc58555');
    triangle(width,height,width/2,height,mouseX,mouseY);
    oldX=mouseX;oldY=mouseY;
  }
}

function mousePressed() {
  background(BG);
  flag = 0;
}

function mouseMoved() {
  flag = 1;
}