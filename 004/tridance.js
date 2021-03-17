const r=30;
const size=400;

let i,j;
let L,H,xn,yn;
let x,y;
let theta,A;

function setup() {
    var canvas = createCanvas(size,size);
    canvas.parent('sketch-holder');
  L=(r*sqrt(3)); // geometric relationship of bounding box to circum-radius of triangle
  H=(r*3/2); // same
  xn=ceil(size/L);
  yn=ceil(size/H);
}

function draw() {
  noStroke();
  theta=-mouseX/250-millis()/7500;
  //theta=theta<(2*PI)?theta:(2*PI); 360 deg limit for testing
  
  A=floor(theta/(2*PI/6))%2?0:255; //swaps active colour every 60 degrees or triangle intersection
  
  if (A==255) {background(243,182,207)} else {background(253,246,175)}
  //swaps background every cycle
  
  z = tricoords(r,theta); //calculates triangle shape for every triangle on the board
  
  for (j=-2;j<=(yn+2);j++) { //extra vertical rows due to active triangle rising every cycle
    for (i=-1;i<=xn;i++) {
      x=i*L-j%2*L/2; // offsets triangles depending on row for tesselation
      y=j*H-floor(theta/(2*PI/6))%6*r/2; //every 2pi/6 or 60deg cycle, the active triangle rises by r/2.
      fill(253,246,175,A);
      triangle(x+z[1],y+z[2],x+z[3],y+z[4],x+z[5],y+z[6]);
      
      fill(243,182,207,255-A);
      x+=L/2;  // dark triangles always rendered to the right of their light counterparts
      triangle(x-z[1],y-z[2],x-z[3],y-z[4],x-z[5],y-z[6]); //phase of triangle is different so flip z
    }
  }
}

function tricoords(r,theta){
  // based on R and theta, creates x and y points relative to circum-centre of triangle.
  let x1,y1,x2,y2,x3,y3;
  x1=r*sin(theta);
  y1=r*cos(theta);
  x2=r*sin(theta+2*PI/3);
  y2=r*cos(theta+2*PI/3);
  x3=r*sin(theta+4*PI/3);
  y3=r*cos(theta+4*PI/3);
  let z={
    1:x1,
    2:y1,
    3:x2,
    4:y2,
    5:x3,
    6:y3
  }
  return z
}