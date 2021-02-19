/***********************************************************************************
	Rooms of my house Assigment
	by Cellini Luong

	Take a tour of my house and navigate through simple states (rooms)

***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 40;

// Room images
function preload() {
  images[0] = loadImage('assets/kitchen.png');
  images[1] = loadImage('assets/living.png');
  images[2] = loadImage('assets/office.png');
  images[3] = loadImage('assets/bedroom.png');
  images[4] = loadImage('assets/bath.png');
  images[5] = loadImage('assets/dining.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // Splash screen as first screen
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(182, 124, 67);

  // will call your state machine function
  drawFunction();
}


//-- Kitchen Drawing
drawKitchen = function() {
   image(images[0],width/2, height/2);

   fill(255);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- Living Room Drawing
drawLiving = function() {
   image(images[1],width/2, height/2);

   fill(255);
   text("Living Room", width/2, height - gTextOffset);
}

//-- Office Drawing
drawOffice = function() {
   image(images[2],width/2, height/2);

   fill(255);
   text("Office", width/2, height - gTextOffset);
}

//-- Bedroom Drawing
drawBedroom = function() {
   image(images[3],width/2, height/2);

   fill(255);
   text("Bedroom", width/2, height - gTextOffset);
}

//-- Bathroom Drawing
drawBath = function() {
   image(images[4],width/2, height/2);

   fill(255);
   text("Bathroom", width/2, height - gTextOffset);
}

//-- Dining Drawing
drawDining = function() {
   image(images[5],width/2, height/2);

   fill(255);
   text("Dining", width/2, height - gTextOffset);
}

// Splash Screen
drawSplash = function() {
   background(240, 210, 176);
   fill(182, 124, 67);
   textSize(60);
   text("Cellini's Place", width/2, height/2);

   textSize(36);
   text("Press I for instructions", width/2, height/2 + 100);
}

// Instruction Screen
drawInstructions = function() {
   background(67, 153, 116);
   fill(255);
   textSize(36);
   text("Every room of this house leads to others", width/2, height/2 - 20);
   
   textSize(24);
   text("Follow the instruction on each screen to navigate", width/2, height/2+ 40);
   text("Start by pressing K to enter the kitchen", width/2, height/2 + 70);
}


// Keys for navigation between rooms
function keyTyped() {
 
  if( drawFunction === drawKitchen ) {
  	if(key === 'd') {
  		drawFunction = drawDining;
  	}
  	else if(key === 'b'){
  		drawFunction = drawBedroom;
  }
}
  if( drawFunction === drawLiving ) {
  	if(key === 'r') {
  		drawFunction = drawBath;
  	}
  	else if(key === 'o'){
  		drawFunction = drawOffice;
  }
}
  if( drawFunction === drawOffice ) {
  	if(key === 'l') {
  		drawFunction = drawLiving;
  	}
  	else if(key === 'k'){
  		drawFunction = drawKitchen;
  }
}
  if( drawFunction === drawBedroom ) {
  	if(key === 'd') {
  		drawFunction = drawDining;
  	}
  	else if(key === 'r'){
  		drawFunction = drawBath;
  }
}
  if( drawFunction === drawBath ) {
  	if(key === 'o') {
  		drawFunction = drawOffice;
  	}
  	else if(key === 'b'){
  		drawFunction = drawBedroom;
  }
}
  if( drawFunction === drawDining ) {
  	if(key === 'k') {
  		drawFunction = drawKitchen;
  	}
  	else if(key === 'l'){
  		drawFunction = drawLiving;
  }  
}
  if( drawFunction === drawSplash ) {
	if (key === "i") {
	    drawFunction = drawInstructions;
  }
}
  if( drawFunction === drawInstructions ) {
  	if(key === 'k') {
  		drawFunction = drawKitchen;
  }  
}  
}

