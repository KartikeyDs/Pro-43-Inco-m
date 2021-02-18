var gameState = 0;
//Home page
var bg_home, bg_home_Img;
var start_btn, start_btn_Img;
//Story
var storm_, storm_Img;
var island_, island_Img;
//Story objetcs
var ob_1;
var ob_2;
//Story(Storm) Sound effect
var storm_so


function preload() {
bg_home_Img = loadAnimation("/images/Home/_0.png","/images/Home/_1.png","/images/Home/_2.png","/images/Home/_3.png","/images/Home/_4.png","/images/Home/_5.png","/images/Home/_6.png","/images/Home/_7.png","/images/Home/_8.png","/images/Home/_9.png","/images/Home/_10.png","/images/Home/_11.png","/images/Home/_12.png");
start_btn_Img = loadImage("/images/Buttons/e.png");
storm_Img = loadAnimation("/images/Story/0.png ", "/images/Story/1.png","/images/Story/2.png", "/images/Story/3.png", "/images/Story/4.png", "/images/Story/5.png", "/images/Story/6.png", "/images/Story/7.png", "/images/Story/8.png", "/images/Story/9.png", "/images/Story/10.png", "/images/Story/11.png", "/images/Story/12.png", "/images/Story/13.png", "/images/Story/14.png", "/images/Story/15.png", "/images/Story/16.png", "/images/Story/17.png", "/images/Story/18.png", "/images/Story/19.png", "/images/Story/20.png", "/images/Story/21.png", "/images/Story/22.png", "/images/Story/23.png", "/images/Story/24.png", "/images/Story/25.png", "/images/Story/26.png", "/images/Story/27.png", "/images/Story/28.png", "/images/Story/29.png", "/images/Story/30.png", "/images/Story/31.png", "/images/Story/32.png", "/images/Story/33.png", "/images/Story/34.png", "/images/Story/35.png");
island_Img = loadAnimation("/images/Story/36.png", "/images/Story/37.png", "/images/Story/38.png", "/images/Story/39.png", "/images/Story/40.png", "/images/Story/41.png", "/images/Story/42.png", "/images/Story/43.png", "/images/Story/44.png", "/images/Story/45.png", "/images/Story/46.png", "/images/Story/47.png", "/images/Story/48.png", "/images/Story/49.png")
storm_so = loadSound("/Sound/storm_s.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  start_btn = createSprite(displayWidth-30, displayHeight-743,0,0);
  start_btn.addImage("btn1", start_btn_Img);
  start_btn.scale = 0.4;

  bg_home = createSprite(displayWidth-690, displayHeight-430, 0, 0);
  bg_home.addAnimation("home",bg_home_Img);
  bg_home.scale = 2.75;

  


  bg_home.depth = start_btn.depth;
  start_btn.depth = start_btn.depth+1;


}

function draw() {
  background(0);  

        if(mousePressedOver(start_btn)){
    
     startButton();

     
}

   
 
  drawSprites();

  if(gameState === 0){
    strokeWeight(3)
    stroke("white")
    fill("black");
    textSize(50);
    
    text("The Lost Fortress", 500,40)
    }
}

function startButton(){

//storm_so.play();

gameState = 1;

ob_1 = createSprite(displayWidth-1337, displayHeight-200,0,0);
ob_1.velocityX = +9.5;
//ob_1.visible = false;

ob_2 = createSprite(displayWidth-0.5, displayHeight-450,2,1000)
//ob_2.visible = false;

storm_ = createSprite(displayWidth-670, displayHeight-440, 10,10);
storm_.scale = 2.3
storm_.addAnimation("st_", storm_Img);

if(ob_1.collide(ob_2)){
  storm_.destroy();
  }


bg_home.destroy();
start_btn.destroy();


}