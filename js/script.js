var player = "X";
var turns = 0;
var end = false;


function performLogic(button, tile) { 
  if (player === "X"){
    $(tile).text('X');
  } else {
    $(tile).text('O');
  }
}

function switchPlayer() {
  if (player === "X"){
    player = "O";
  } else {
    player = "X";
  }
}

function checkHorizontal() {
  
}


$("#button1").click(function() {
  performLogic("#button1","#tile1");
  switchPlayer();
});

$("#button2").click(function() {
  performLogic("#button2","#tile2");
  switchPlayer();
});

$("#button3").click(function() {
  performLogic("#button3","#tile3");
  switchPlayer();
});

$("#button4").click(function() {
  performLogic("#button4","#tile4");
  switchPlayer();
});

$("#button5").click(function() {
  performLogic("#button5","#tile5");
  switchPlayer();
});

$("#button6").click(function() {
  performLogic("#button6","#tile6");
  switchPlayer();
});

$("#button7").click(function() {
  performLogic("#button7","#tile7");
  switchPlayer();
});

$("#button8").click(function() {
  performLogic("#button8","#tile8");
  switchPlayer();
});

$("#button9").click(function() {
  performLogic("#button9","#tile9");
  switchPlayer();
});

