//For red, green and blue color values
let r,g,b

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    //Pick colors randomly 
    r=random(255);
    g=random(255);
    b=random(255);
}

//The draw function happens over and over again
function draw() {
  background(0,104,56); //an RGB color for the canvas' background
  //circle
  strokeWeight(4)
  stroke(r,g,b); // an RGB color for the circle's border
  fill(r,g,b,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(255,200,200,200); // center of canvas, 20px dia

//When mouse pressed
function mousePressed(){
  //Check if Mouse is inside circle
  let d=dist(mouseX,mouseY,360,200);
  if (d<100){
    //pick different color values 
  r=random(255);
  g=random(255);
  b=random(255);
  }
}

  //text
  	stroke(0,174,239);
  	fill(160,255,148);
  	textSize(46);
  	textFont("Helvetica");
  	textStyle(BOLD);
  	text("leader",
          constrain(mouseX,0,width - textWidth("leader")),
            constrain(mouseY,0,height - 48 + textDescent()))
  

  
}
