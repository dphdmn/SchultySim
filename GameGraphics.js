class GameGraphics extends Graphic_tools {

  sizeChange(){
    super.sizeChange();
    this.tileSize = this.boardSize/myStats.N;
    this.tileTextSize = this.tileSize/1.9;
    this.zero = (this.W-this.boardSize)/2;
  }
  
  //draw tile with number num, position x, y, where x and y are 0..N-1 positions, not the exact coordinats
  drawTile(num, x, y){
    let exactX = this.zero + this.tileSize*x;
    let exactY = this.zero + this.tileSize*y;
    /*
    if (num != 1){
      fill(cc("tileColor", 240));      
    }
    else{
      fill(255,0,0);
    }*/
    fill(cc("tileColor", 240)); 
    strokeWeight(0.7);
    rect(exactX,exactY,this.tileSize,this.tileSize, cornersConst);
    strokeWeight(0.1);
    fill(cc("tileText",230)); 
    text(num, exactX+this.tileSize/2, exactY+this.tileSize/2);
  }
  
  drawSettings(){
    super.drawSettings();
    let nCounter = 3;
    let modeCounter = "Light";
    let posCounter = 19;
    fill(cc("lightStats")); 
    textSize(27);
    this.drawLine(["Light (" + myStats.typeName + ")"], 21, true);
    fill(cc("headers")); 
    this.drawLine(["Size"].concat(myStats.myAvgs), 20, true);
    let resAr = [];
    while (nCounter < 11){
      fill(cc("statsText")); 
      resAr = [];
      resAr.length = 0;
      resAr.push(nCounter + "x" + nCounter);
      myStats.myAvgs.forEach(function(avg){
        resAr.push(myStats.lHighScore(myStats.typeName, modeCounter, nCounter, avg))
      });
      fill(getRangeColor(3, 10, nCounter, true, 170));
      this.drawLine(resAr,
               posCounter,
               false);
      posCounter--;
      nCounter++;
      if (nCounter == 11){
        if (modeCounter != "Original"){
          modeCounter = "Original";
          fill(cc("origStats")); 
          this.drawLine(["Original (" + myStats.typeName + ")"], posCounter, true);
          posCounter--;
          fill(cc("headers")); 
          this.drawLine(["Size"].concat(myStats.myAvgs), posCounter, true);
          posCounter--;
          nCounter = 3;
        }
      }
    }
    fill(cc("helpers")); 
    this.drawLine(["[R] to show other type","[H] to reset HighScores"],
             posCounter,false);  
    }
  
  textThings(){
    super.textThings();
    fill(cc("helpers", this.alpha));
    
    textSize(20);
    text("[SpaceBar] to Reset | [M] to change mode | [V] to hide things | [+][-] size change",this.W/2, this.W-this.W/9);
    textSize(25);
    
    if (reactions.length>0){
       textSize(25);
       let r = reactions[reactions.length-1];
       fill(getRangeColor(150, 1000, r, true, this.alpha));
       text(int(r),this.W/2, this.W/9);
     }
    let N = myStats.N;
    textSize(50);
    fill(getRangeColor(1,N*N,currentNumber, false, this.alpha));

    if (currentNumber <= N*N){
      text(currentNumber, this.W/2-this.W/3,this.W/15);
      textAlign(LEFT,CENTER);
      text((currentTime).toFixed(2), this.W/2+this.W/4,this.W/15); 
      textAlign(CENTER,CENTER);
    }   
    textFont('Helvetica'); 
   // noStroke();
    
    textAlign(CENTER,CENTER);
    textSize(this.tileTextSize); 
    textStyle(NORMAL);
    for (let i = 1; i <= N*N; i++) {
      if (notSolved[i-1]){
        this.drawTile(randomNumbers[i-1],linToX(i),linToY(i));
      }
    }  
  }
  
  gameOverText(){
    super.gameOverText();
    textSize(55);
    fill(cc("gameOver")); 
    text(myStats.modeName + " [" + myStats.N + "x" + myStats.N + "] " + "{" + myStats.solvesAmount + "}", this.W/2, this.W/2);  
  }
}

