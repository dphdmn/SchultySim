let gameName;

let reactions;
let solvesT;
let solvesR;

let startTime;
let currentTime;
let lastpicktime;

let currentNumber;
let randomNumbers;
let notSolved;


function gamePreSetup(){
  
  gameName = "SchultySim";
  gameVersion = "[γ]";
  gameOverDrawn = false;
  wheelConst = 1.5;
  reactions = [];
  solvesT = [];
  solvesR = [];
  myStats.setMode("Light");
  myStats.setType("Time");
  myStats.N = 5;
}

function nullSolveInfo(){
  solvesT.length = 0;
  solvesR.length = 0;
  myStats.solvesAmount = 0;
}

function nullGame(){
  let N = myStats.N;
  randomNumbers = [];
  notSolved = [];
  lastpicktime = 0;
  reactions.length = 0;
  
  startTime = new Date();
  
  currentNumber = 1;
  
  let maxN = N*N;
  for (let i = 1; i <= maxN; i++){
    randomNumbers[i-1]=i;
    notSolved[i-1] = true;
  }
  randomNumbers = shuffleNumbers(randomNumbers);
  
}

//should return true if lose
function checkIfLose(){
  let N = myStats.N;
  return (currentNumber > N*N);
}

function gameThings(){  
  currentTime = (new Date() - startTime)/1000;
}

//randomize array numbers
function shuffleNumbers(array) {
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

//X Y coords to lin (0..4) (0..4) to 1..N^2
function XYtolin(X, Y)
{
  let N = myStats.N;
  return Y*N + X + 1;
}

//lineral coordinats to X (1..N^2) to (0..4)
function linToX(lin){
  let N = myStats.N;
  return (lin-1) % N;
}

//lineral coordinats to Y (1..N^2) to (0..4)
function linToY(lin){
  let N = myStats.N;
  return int(floor((lin-1) / N));
}

function addSolve(){
 solvesT.push(currentTime);
 recalcReact(); 
 solvesR.push(currentReactAvg);
}

let currentReactAvg;
function recalcReact(){
  let outliers = int((reactions.length*outlierconst));
  currentReactAvg = int(getAverage(reactions, outliers));
  if (currentReactAvg === 0){
    currentReactAvg = 9999;
  }
}

