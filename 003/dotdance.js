let xsize=400;
let ysize=400;
let i,t,dy,cenX,cenY,x,y,inside;
const n=10,margin=50;
let speed;
let theta;

const gap=(xsize-margin*2)/(n-1);

function setup() {
    var canvas = createCanvas(xsize,ysize);
    canvas.parent('sketch-holder');
  colorMode(HSB);
  x=xsize/2;
  y=ysize/2;
}

function draw() {
  t=millis()/1000;
  background(20);
  noStroke();
  if (mouseX<xsize && mouseX>0 && mouseY<ysize && mouseY>0) {
    cenX = mouseX;cenY = mouseY;inside=1;
  } else {
    cenX = xsize/2;cenY = ysize/2;inside=0;
  }
  x+= (cenX-x)*0.05;
  y+= (cenY-y)*0.05; //i wish i could add more life. e.g randomized particle travel time, some overshoot
  
  for (i=0;i<n;i++) {
    fill(360/n*i,50,100);
    speed=i-(n-1)/2;
    dy=sin(speed*t)*ysize/5;
    //circle(margin+i*gap,ysize/2+dy,30);
    theta=i/n*2*PI+t;
    if (i == 0 & (inside|abs(cenX-x)>1)) {
      circle(x+(dy)*cos(theta),y+(dy)*sin(theta),17);
    } else {
      circle(xsize/2+(dy)*cos(theta),ysize/2+(dy)*sin(theta),17);
    }
    //text(round(speed,1),margin+i*gap,ysize/2)
  }
  //circle(triwave(t,6,400),30,30);
}

function triwave(t,T,A) {
  // feed time, Time constant and Amplitude
  // returns triangle wave that goes up to A and back to 0 in T seconds
  return A-abs((t/T)%1*2*A - A);
}