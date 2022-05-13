var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var i = 0;

$("html").keypress(function(){$("h1").text("Started!");nextSequence()});
$(".btn").click(function(){clickHandler(this.id)});

function clearGame(){
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  $("h1").text("Game over! Press A Key to start again.");
　}


function nextLevel(){

    userClickedPattern = [];
    nextSequence();
    level++;
    $("h1").text("Level  "+level.toString());
}

function clickHandler(id){
  var  userChosenColour= id;
  playSound(userChosenColour);
  animation(userChosenColour);
  userClickedPattern.push(userChosenColour);
  if (gamePattern.slice(0, userClickedPattern.length).toString() == userClickedPattern.toString()){
    if (userClickedPattern.toString() == gamePattern.toString()){
      setTimeout(function(){nextLevel()}, 500);
  　　　}
  }
  else{
    playSound("wrong");
    clearGame();
  }
}

function nextSequence(){
  var randomNumber  = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  animation(randomChosenColour);
  playSound(randomChosenColour);
  return gamePattern;
}

function playSound(soundFileName){
  var audio = new Audio("./sounds/"+soundFileName+".mp3");
  audio.play();
}

function animation(buttonClicked){
  $("#"+buttonClicked).addClass("pressed");
  setTimeout(function(){$("#"+buttonClicked).removeClass("pressed")}, 100);
}
