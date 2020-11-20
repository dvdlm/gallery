let xlim = 400
let ylim = 400
let x_0 = xlim / 2;
let y_0 = ylim / 20;

let m = 10;

let x, y, t, t_0 = 0,
  theta, theta_0 = 0.2,
  l = 300,
  w_n;
let flag = 0;

function setup() {
  var canvas = createCanvas(xlim, ylim);
  canvas.parent('sketch-holder');
}

function draw() {
  background(220);

  if (flag == 1) {
    x += (mouseX-x)*0.2;
    y += (mouseY-y)*0.2;

    l = sqrt((x - x_0) ** 2 + (y - y_0) ** 2)

    theta_0 = atan((x - x_0) / (y - y_0))
    fill(0)
    t_0 = millis()
  }

  w_n = sqrt(9.81 / (l / 400 * 0.2))
  t = (millis() - t_0) / 1000;
  theta = theta_0 * (cos(w_n * t)) * exp(-t)
  x = x_0 + l * sin(theta);
  y = y_0 + l * cos(theta);



  line(x_0, y_0, x, y)
  ellipse(x, y, m, m)
}

function mouseDragged() {
  if (abs(mouseX - x) < 20 && abs(mouseY - y) < 20) {
    flag = 1;
  }
}

  function mouseClicked() {
    flag = 0;
    fill(255)
  }
