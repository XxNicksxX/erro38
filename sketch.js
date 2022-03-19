var database
var backgroundmg
var gameState = 0
var playerCount
var player,form,game
var allplayers
var car1, car2, car3 ,car4
var cars
var distance=0 

function setup(){
  createCanvas(displayWidth,displayHeight);
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
  
 
}

function draw(){
  background("white");
  if (playerCount===4){
    game.update(1)
  }
 if(gameState===1){
   clear()
   game.play()
 }
  
}
