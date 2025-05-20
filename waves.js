var hscale = 0.5
function setup() {
  var cnv = createCanvas(window.innerWidth, hscale*window.innerHeight);
  frameRate(24);
  noFill();
  cnv.position(0,.30*window.innerHeight);
}
var points = window.innerWidth;
var numWaves = hscale*window.innerHeight / 8 - 2;
var t = 0; // time variable
var change = 1;
var arr = [];
for(var i = 0; i < points; i++) {
    arr.push(Math.random());
}  
function draw() {

  var colors = [
    color(239, 58, 71)
  ];
  background(255,255,255);
  for (var l = 0; l < numWaves; l++) {
    stroke(colors[0]);
    strokeWeight(1);
    beginShape();
    for (var x = -points / 2; x <= 3*points /2; x += 5) {
      // Big
      var freq1 = 0.8;
      var amp1 = 4; 
      var phase1 = t * (0.7 + l * 0.15) + l * 2;
      //Small
      var freq2 = 2;
      var amp2 = 2  ;//10*Math.random();
      var phase2 = t * (0.3 + l * 0.6) + l * 5;
      var y = 8*(l + 1) + 
      amp1 * Math.sin(Math.PI/180* (freq1 * x + phase1)) +
      amp2 * Math.sin(Math.PI/180*(freq2 * x + phase2));
      
      vertex(x, y + 5*arr[(x + l*3) % points]);
    }
    endShape();
  }
  t += change;
  if(Math.abs(t) > 10000) {
      change = -1*change;
  }
  arr[Math.floor(Math.random()*points)] = Math.random();
 
}
function windowResized() {
  cnx = resizeCanvas(window.innerWidth, hscale*window.innerHeight);
  points = window.innerWidth;
  numWaves = hscale*window.innerHeight / 8 - 2;
}
