let i,x,y,theta,t,dr,angle=0,mouseangle;
const size=400;
const res=500;
const r=125;
const strk=10;

function setup() {
  var canvas = createCanvas(size,size);
  canvas.parent('sketch-holder');
}

function draw() {
  noStroke()
  background(255);
  //for (i=0;i<400;i++) {circle(i,200+sin(i/400*2*PI+millis()/1000)*(i-200)**1,10);}
  
  t=millis()/1000;
  mouseangle=atan2(mouseY-size/2,mouseX-size/2);
  
  for (i=0;i<res;i++) {
    theta=i/res*2*PI;
    
    // ~~~~ the magic happens here ~~~~
    //angle%(2*PI) maybe parse the angle absolute, then parse the diff absolute? then add?
    angle += (mouseangle-angle)*0.00005;
    //dr = sin(theta*10+t*2)*20*(cos(theta-PI-t%(2*PI))/2+0.5)**3; 
    dr = sin(theta*10+t*2)*20*(cos(theta-angle-PI/2)/2+0.5)**3; 
    // ~~~ the magic happened there ~~~ 
    
    fill(255,125,255,40)
    x=size/2+(r+dr)*sin(theta);
    y=size/2-(r+dr)*cos(theta); //flip y: theta=0 is top, head cwise.
    circle(x,y,strk);
    
    fill(125,255,255,40)
    x=size/2+(r-dr)*sin(theta);
    y=size/2-(r-dr)*cos(theta); //flip y: theta=0 is top, head cwise.
    circle(x,y,strk);
  }
}

// inspo https://www.reddit.com/r/loadingicon/comments/m4yept/overlapping_waves_oc/

// their inspo https://www.reddit.com/user/davebees/posts/