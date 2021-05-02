
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("forest.png")
 
}



function setup() {
  createCanvas(600,600)
  
  ground = createSprite(400,10,900,10);
  ground.addAnimation("ground", groundImage)
  ground.scale = 1.8;
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
 obstacleGroup = new Group();
 FoodGroup = new Group();
  
}
 score = 0;

function draw() {
  text("Score: "+ score, 500,50);
 
  
  ground.velocityX = -3 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

  if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
    
  }
  
  if(keyDown("up")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
  drawSprites();
  
  spawnObstacles();
  spawnBananas();
}


function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,300,90,10);
    obstacle.x = Math.round(random(800,800));
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}

function spawnBananas() {
  //write code here to spawn the banana
  if (frameCount % 300 === 0) {
    var banana = createSprite(200,100,90,10);
    banana.x = Math.round(random(400,400));
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}







