var database;
var Gamestate=0;
var PlayerCount;
var form,player,game;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
    game=new Game()
    game.getState()
    game.start()

}

function draw(){
    background(0);
  
    drawSprites();
}
