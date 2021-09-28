let h = 50;
let pad=5;
let nrow=10;
let ncol=10;
colors = ["#FF0000", "#0000FF", "#FFFF00"]

function setup() {
  createCanvas((h+pad)*nrow,(h+pad)*ncol);
  angleMode(RADIANS);
  noLoop();
  // noStroke();
  fill(200);
  rectMode(CENTER);
}

function draw() {

  for(i=1;i<nrow;i++){
    for(j=1;j<ncol;j++){

    push();
    translate((h+pad)*i, (h+pad)*j);
    rotate(PI/2*random([1,2,3,4]));
    scale((-1)**random([1,2]),(-1)**random([1,2]));
    drawTile(h/2);
    pop();

    }
  }
}

function drawTile(r){

  col = random(colors);
  fill(col);
  noStroke();

  beginShape();
  vertex(0,r);
  vertex(r,-r);
  vertex(-r,-r);
  vertex(-r,r);
  endShape(CLOSE);

  stroke(0,0,0);
  noFill();

  beginShape();
  vertex(0,r);
  vertex(r,-r);
  vertex(-r,-r);
  vertex(-r,r);
  endShape(CLOSE);

  for(k=1;k<=random(5,30);k++){
    push();
    scale(random(0.05,0.95));
    beginShape();
    vertex(0,r);
    vertex(r,-r);
    vertex(-r,-r);
    vertex(-r,r);
    endShape(CLOSE);
    pop();
  }

}
