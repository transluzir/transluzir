let img;
var butX;
var butY;
var turnOn = false;
var timer = 0;

function preload() {
  img = loadImage('corpo4.jpg');
  butX = int(random(450));
  butY = int(random(300));
}

function setup() {
  createCanvas(600,425);
  pixelDensity(1);
  frameRate(30);
}

function draw() {
  
  loadPixels();
  
  if(timer > 30*1000){
    timer = 0;
    turnOn = false;
    butX = int(random(550));
    butY = int(random(375));
  }
  
    img.loadPixels();
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++ ) {
        
        let loc = (x + y*img.width)*4;
        
        let r,g,b;
        r = img.pixels[loc];
        
        let maxdist = 53;//dist(0,0,width,height);
        let d = dist(x, y, mouseX, mouseY);
        let adjustbrightness = 255*(maxdist-d)/maxdist;
        
        if(turnOn == false){
          r += adjustbrightness;
          
          r = constrain(r, 0, 255);
        }
        
        else{
          timer ++;
        }
        
        
        let pixloc = (y*width + x)*4;
        pixels[pixloc] = r;
        pixels[pixloc+1] = r;
        pixels[pixloc+2] = r;
        pixels[pixloc+3] = 255; 
        }
    }
  
  updatePixels();
  stroke (0, 0);
  fill (0);
  
  ellipse (butX, butY, 30, 30)
    
   if (mouseIsPressed && mouseX > (butX -15) && mouseX < (butX + 15)  && mouseY > (butY -15) && mouseY < (butY + 15)){
    turnOn = true;
   }
}