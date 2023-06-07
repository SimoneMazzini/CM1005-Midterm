/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    
    collectable =[
         {pos_x:-4900, pos_y:100},
       {pos_x:-3900, pos_y:100},
       {pos_x:-2900, pos_y:100},
       {pos_x:-1900, pos_y:100},
       {pos_x:-900, pos_y:100},
      {pos_x:100, pos_y:100},
      {pos_x:1100, pos_y:100},
      {pos_x:2100, pos_y:100},
      {pos_x:3100, pos_y:100},
      {pos_x:4100, pos_y:100},
       {pos_x:5100, pos_y:100},
        
    ];
    
  canyon = [
      {pos_x:-4900, pos_y:100},
       {pos_x:-3900, pos_y:100},
       {pos_x:-2900, pos_y:100},
       {pos_x:-1900, pos_y:100},
       {pos_x:-900, pos_y:100},
      {pos_x:100, pos_y:100},
      {pos_x:1100, pos_y:100},
      {pos_x:2100, pos_y:100},
      {pos_x:3100, pos_y:100},
      {pos_x:4100, pos_y:100},
       {pos_x:5100, pos_y:100},
      
  ];
  mountains = [
       {pos_x:-4900, pos_y:100},
       {pos_x:-3900, pos_y:100},
       {pos_x:-2900, pos_y:100},
       {pos_x:-1900, pos_y:100},
       {pos_x:-900, pos_y:100},
      {pos_x:100, pos_y:100},
      {pos_x:1100, pos_y:100},
      {pos_x:2100, pos_y:100},
      {pos_x:3100, pos_y:100},
      {pos_x:4100, pos_y:100},
       {pos_x:5100, pos_y:100},
  ];
    trees_x = [-4400,-3900,-2900,-1900,-900,100,1100,2100,3100,4100,5100];
    clouds = [
         {pos_x:-4900, pos_y:100},
        {pos_x:-3900, pos_y:100},
        {pos_x:-2900, pos_y:100},
        {pos_x:-1900, pos_y:100},
        {pos_x:-900, pos_y:100},
        {pos_x:100, pos_y:100},
        {pos_x:1100, pos_y:100},
        {pos_x:2100, pos_y:100},
         {pos_x:3100, pos_y:100},
         {pos_x:4100, pos_y:100},
         {pos_x:5100, pos_y:100},
      
        
    ];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    

    push();
    translate(scrollPos,0);

	// Draw clouds.
    
    for(var i=0; i < clouds.length; i+=1)
        {   
            
            noStroke();
            fill(255);
  ellipse(clouds[i].pos_x,clouds[i].pos_y,60,50);
  ellipse(clouds[i].pos_x+30,clouds[i].pos_y-10,60,50);
  ellipse(clouds[i].pos_x+50,clouds[i].pos_y,60,50);
  ellipse(clouds[i].pos_x+20,clouds[i].pos_y+20,60,50);
  ellipse(clouds[i].pos_x+60,clouds[i].pos_y+15,60,50);
            }
for(var i=0; i < clouds.length; i+=1)
    {
  noStroke();
  fill(255);
  ellipse(clouds[i].pos_x+100,clouds[i].pos_y+50,60,50);
  ellipse(clouds[i].pos_x+120,clouds[i].pos_y+70,60,50);
  ellipse(clouds[i].pos_x+160,clouds[i].pos_y+65,60,50);
    }
    
    
	// Draw mountains.
  //further mountain
    for(var i=0; i < mountains.length; i+=1)
        {
  fill(91, 71, 110);
  strokeWeight(0);
  triangle(mountains[i].pos_x+260, 130, mountains[i].pos_x+660, 500, mountains[i].pos_x-140, 500);
  
  fill(213, 212, 255);
  strokeWeight(0);
	beginShape();
		vertex(mountains[i].pos_x+260, 130);
		vertex(mountains[i].pos_x+385, 246);
		vertex(mountains[i].pos_x+290, 200);
		vertex(mountains[i].pos_x+260, 250);
  	vertex(mountains[i].pos_x+220, 217);
  	vertex(mountains[i].pos_x+125, 255);
	endShape(CLOSE);
    //closer one
  fill(174, 139, 222);
  strokeWeight(0);
  triangle(mountains[i].pos_x, 180, mountains[i].pos_x+400, 500, mountains[i].pos_x-360, 500);
  
  fill(231, 241, 255);
  strokeWeight(0);
	beginShape();
		vertex(mountains[i].pos_x, 180);
		vertex(mountains[i].pos_x+125, 280);
		vertex(mountains[i].pos_x+45, 250);
		vertex(mountains[i].pos_x+20, 290);
  	vertex(mountains[i].pos_x-30, 260);
  	vertex(mountains[i].pos_x-120, 286);
	endShape(CLOSE);
//HILLS
  fill(60, 145, 57);
	ellipse(mountains[i].pos_x-50, 620, 1000, 400);
  
  fill(69, 168, 66);
  ellipse(mountains[i].pos_x+540, 630, 1500, 400);
            }

	// Draw trees.
    for (var i = 0; i < trees_x.length; i+=1)
        {
           
  //right tree
  fill('brown');
  rect(trees_x[i]+100,335,20,100);
  fill('green');
  ellipse(trees_x[i]+110,305,70,70);
  
  //left tree
  fill('brown');
  rect(trees_x[i],335,20,100);
  fill('green');
  ellipse(trees_x[i]+10,305,70,70);
  
  
  //middle tree
  fill('brown');
  rect(trees_x[i]+50,335,20,100);
  fill('green');
  ellipse(trees_x[i]+60,305,70,70);
            }
  

	// Draw canyons
  for(var i=0; i < canyon.length; i+=1)
      {
          fill(139,69,19);
          rect(canyon[i].pos_x+460,430,190,400);
          fill(64,224,208);
          rect(canyon[i].pos_x+480,430,150,400);
     
      }
	// Draw collectable items
    
    for(var i=0; i < collectable.length; i+=1)
        {
            fill (220,20,60);
            ellipse(collectable[i].pos_x+250, 430,20,50);
            fill (220,20,60);
            ellipse(collectable[i].pos_x+240, 430,20,50);
            fill (0,0,0);
            rect(collectable[i].pos_x+243, 397,5,15);
        }
   
pop();
	// Draw the game character - this must be last
    

    fill(255,228,225);
    stroke(0,0,0);
    ellipse(gameChar_x,gameChar_y-50, 20,20);
    fill(255,99,71);
    rect(gameChar_x-8,gameChar_y-40,15,30);
    fill(255,228,225);
    stroke(0,0,0);
    ellipse(gameChar_x+10,gameChar_y-25, 5,20);
    fill(255,228,225);
    stroke(0,0,0);
    ellipse(gameChar_x-10,gameChar_y-25, 5,20);
    fill(255,255,255);
    rect(gameChar_x-8,gameChar_y-37,15,5);
    fill(255,255,255);
    rect(gameChar_x-8,gameChar_y-29,15,5);
    fill(0,0,0);
    rect(gameChar_x-8,gameChar_y-10,5,10);
    fill(0,0,0);
    rect(gameChar_x+1,gameChar_y-10,5,10);
   
    


	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
    
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
