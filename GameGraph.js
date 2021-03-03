class GameGraph extends Graph_tools{  
  constructor(myArray, sessionAvg, sesSigma, reactAvg, sesAm, reactAm, reactions){
    super(myArray, sessionAvg, sesAm, sesSigma);
    if (myGraphics.graph){
      this.arrayForDraw = reactions;
      this.graphName = "Reactions of current solve";
      this.avg = reactAvg;
      this.sigma = float(getSigmaN(reactions,reactions.length));
      this.am = reactAm;
      this.drawAos = false;
    }
  }
}