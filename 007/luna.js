let i,n,np=0;
let stars=[]
let len=50; //godray length;
const mtnhigh=200;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  for (i=0;i<100;i++) {stars[i]=[random(width),random(height)];}// place stars
  addEffects(godrays({ samplerNum: -1, lightPos: nMouse() }));
  noCursor();
}

function draw() {
  background('#336');
  stroke('white');
  for (i=0;i<100;i++) {strokeWeight(5*noise((i*100000)+millis()/1000)**4);point(...stars[i]);} //render stars
  
  circle(mouseX,mouseY,10)
  
  for (i=0;i<=400+len;i++) {
    n=(noise(i/100+millis()/10000)-0.5)*250 + mtnhigh;
    strokeWeight(2);stroke('black');
    line(i-0,np,i,n); //ridgeline smoothing
    line(i,n,i,height); //mountainfill
    //point(i,200+n*50);
    np=n;
  }
  push();
  noStroke();
  fill(255);
  //circle(330,60,60);
  pop();
}