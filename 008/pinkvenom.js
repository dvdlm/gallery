const size=400;
//const B='black',W='white';
const B='#f3b6cf',W='#ed458b';
const r=10;
const wall=[];
const centerlife=30; // frames to live
const splotchsize=3;
let splotch;

class Dot {
  constructor(x,y,w,c=0) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.c=c;
  }
  
  draw() {
    if (this.w) {
      push(); fill(W);
      ellipse(this.x,this.y,r*2); pop();
    }
    
    if (this.c) {
      splotch=round(this.c/centerlife*splotchsize);
      //splotch=splotchsize; this isn't as nice
      push();
      translate(this.x,this.y);
      fill(W);
      rect(-2*r,-2*r*splotch,4*r,4*r*splotch);
      rect(-2*r*splotch,-2*r,4*r*splotch,4*r);
      pop();
    }
  }
  
  drawB() {
      if (!this.w) {
      push(); fill(B);
      ellipse(this.x,this.y,r*2); pop();
    }
  }
}

function setup() {
  var canvas=createCanvas(size,size);
  canvas.parent('sketch-holder');
  noStroke();
  let n = size/(2*r);
  let w_=1;
  for (y=0;y<=size;y+=2*r) {
    let w=w_;
    let row=[];
    for (x=0;x<=size;x+=2*r) {
      let d = new Dot(x,y,w);
      row.push(d);
      w=!w;
    }
    wall.push(row);
    w_=!w_;
  }
  noCursor();
}

function draw() {
  background(B);
  let centerY=round(constrain(mouseY,0,size)/2/r);
  let centerX=round(constrain(mouseX,0,size)/2/r);
  wall[centerY][centerX].c=centerlife; //label for center
  wall.forEach(row=>row.forEach(element=>{
    element.draw();
    if (element.c) {element.c--;}
  }));
  wall.forEach(row=>row.forEach(element=>{
    element.drawB();
  }));
}