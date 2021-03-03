let myGraphics;
let myStats;
let img;
let eatsound;

//load sound to play later
function preload(){
  eatsound = loadSound("bop.mp3");
 // img = loadImage("grad.png");
}

//function before game
function setup(){
  //cursor('big_pink.cur');
  cursor('circle4.cur');
  setBasicGuiColors();
  
  
  myGraphics = new GameGraphics();
  
  aroundSetup();
  myStats = new GameStats();  
  gamePreSetup();
  gameSetup(false);
}
