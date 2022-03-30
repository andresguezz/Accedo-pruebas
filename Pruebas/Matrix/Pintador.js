var cols = 5;
var rows = 10;
var colors = []

function setup(){
  createCanvas(250,500);
  for (var i =0; i < cols; i++){
    colors [i] = random;
    for (var j=0; j < rows; j++){
    colors [i] [j] = random (255)
    }}
}



function draw (){
  background (51);

  for (var i =0; i < cols; i++){
    for (var j=0; j < rows; j++){
      var x =i *50;
      var y =j *50;
      fill(colors[i] [j])
      stroke(0);
      rect(x,y,50,50);
    }
  }
}