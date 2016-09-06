//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke(300,300,0,200);
  fill(30,10,200,255);
  strokeWeight(5);
  rect(x, y, 20, 60);
  rect(x, y, 10, 30);

  strokeWeight(5);
  rect(x+20, y+0, 20, 20);
  rect(x+29, y+9, 2, 2);
  rect(x+8.5, y+42, 3, 8);
  ellipse(x+35,y+45, 30, 30);
  ellipse(x+35,y+45, 10, 10);
}

function setup() {
  createCanvas(800,800);
  background(260,69,0,250); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      FunnyFace(x*100, 15+y*100);
      console.log("x:"+x+"y:"+y);
    }
  }
}
