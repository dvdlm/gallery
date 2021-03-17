let bgmax = 246; // sampled from album art
let bgmin = 198;
let limits = 400;
let diaglimit;
let spheresize = 270;
let theta, ptheta, dx, dy, dz;
let boost=1;

function setup() {
  var canvas = createCanvas(limits, limits, WEBGL);
  canvas.parent('sketch-holder');
  noStroke();
  diaglimit = round(limits * sqrt(2));
  background(bgmin);
  for (let i = diaglimit; i > spheresize; i -= 2) {
    fill(bgmin + (bgmax - bgmin) * ((diaglimit - i) / (diaglimit - spheresize)));
    ellipse(0, 0, i, i); // all this work so far has been to create the gradient...
  }
  fill(32);
  ellipse(0, 0, spheresize, spheresize);
  fill(0);
  //ellipse(0,0,diaglimit,diaglimit);
}

function draw() {
  clear();
  boost -= (boost - 1)*0.03;

  for (let i = diaglimit; i > spheresize; i -= 2) {
    fill(bgmin + (bgmax - bgmin) * ((diaglimit - i) / (diaglimit - spheresize)));
    ellipse(0, 0, i, i); // all this work so far has been to create the gradient...
  }
  fill(sin(millis()/500)*20+32);// breathing
  ellipse(0, 0, 270, 270);
  fill(bgmax);
  for (let j = -35/2; j<35/2; j++) {
    push()
    spheresize = 270 * cos(j*PI/35);
    translate(-spheresize / 2, -270/2*sin(j*PI/35), 0)
    for (let i = 1; i < 35; i++) {
      theta = i * PI / 35;
      ptheta = (i - 1) * PI / 35;
      dx = -spheresize / 2 * (cos(theta) - cos(ptheta));
      dz = spheresize / 2 * (sin(theta) - sin(ptheta))*(1+sin(millis()/500)*0.2)*0.2*boost; // breathing

      translate(dx, 0, dz);
      sphere(1);
    }
    pop()
  }

}

function mousePressed() {
  boost+=7;

}
