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

// load all images into an array
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
  textSize(36);

  // set to one for startup
  drawFunction = drawKitchen;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(182, 124, 67);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawKitchen = function() {
   image(images[0],width/2, height/2);

   fill(255);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawLiving = function() {
   image(images[1],width/2, height/2);

   fill(255);
   text("Living Room", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawOffice = function() {
   image(images[2],width/2, height/2);

   fill(255);
   text("Office", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawBedroom = function() {
   image(images[3],width/2, height/2);

   fill(255);
   text("Bedroom", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawBath = function() {
   image(images[4],width/2, height/2);

   fill(255);
   text("Bathroom", width/2, height - gTextOffset);
}

//-- drawDining() will draw the image at index 4 from the array
drawDining = function() {
   image(images[5],width/2, height/2);

   fill(255);
   text("Dining", width/2, height - gTextOffset);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
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
}
