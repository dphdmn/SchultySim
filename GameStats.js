class GameStats extends Stats_tools{
  
  constructor(){
    super();
    this.addMods(["Light", "Original"]); 
    this.addTypes(["Time", "Reaction"]);
    this.addSizes([3,4,5,6,7,8,9,10]);
    this.addAvgs(["single","ao5","ao12","ao50","ao100"]);
  }
  setAvg(str){
    let curAvgN;
    if (str == "single"){
      curAvgN = 1;
    }
    if (str == "ao5"){
      curAvgN = 5;
    }
    if (str == "ao12"){
      curAvgN = 12;
    }
    if (str == "ao50"){
      curAvgN = 50;
    }
    if (str == "ao100"){
      curAvgN = 100;
    } 
    super.setAvg(str, curAvgN);
  }
  setType(str){
    let mySingle;
    let myArray;
    if (str == "Time"){
      myArray = solvesT;
      mySingle = currentTime;
    }
    if (str == "Reaction"){
      myArray = solvesR;
      mySingle = currentReactAvg;
    }
    super.setType(str,myArray,mySingle);
    
  }
  setMode(str){
    super.setMode(str);
    if (str == "Light"){
      this.hideElments = true;
         
      myGuiColors.setGui("tileText","AQUA_LIGHT");
      myGuiColors.setGui("gameBg","BLACK_GREEN");
      myGuiColors.setGui("smallSphere", "AVG_GREEN");
      myGuiColors.setGui("gameOver", "GREEN");
      
      myGuiColors.setGui("tileText","BLACK");
      myGuiColors.setGui("tileColor","WHITE_GREEN");
      
    }
    if (str == "Original"){
      this.hideElments = false;
      myGuiColors.setGui("tileText","BLUE_LIGHT");
      myGuiColors.setGui("gameBg","BLACK_BLUE");
      myGuiColors.setGui("smallSphere", "AVG_BLUE");
      myGuiColors.setGui("gameOver", "BLUE");
      
      myGuiColors.setGui("tileText","BLACK");
      myGuiColors.setGui("tileColor","WHITE_BLUE");
      
    }
  }
}