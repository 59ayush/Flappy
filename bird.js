var g = 1;
var v = 0;
var h = 36;
var startFlag = 0;

var bird = $(".bird");
bird.css("margin-top", h + "vh");

function move() {
  v += g * 0.1;
  h += v * 0.1;
  bird.css("margin-top", h + "vh");
  bird.css("transform", "rotate(" + (v * 4) + "deg)");
}

var moveInterval, checkInterval;
$("body").on("keypress", function(){
  v = -5;
  if (startFlag == 0){
    moveInterval = setInterval(move, 1);
    checkInterval = setInterval(check, 1);
    startFlag = 1;
    var scoreP = $(".score");
    scoreP.text("Score: 0");
    scoreP.css("margin-top", "9vh");
    scoreP.css("font-size", "6vh");
  }
});

function check(){
  if (($(".check").text() == 1) || (h > 73) || (h < -2)){
    g = 0;
    v = 0;
    $(".check").text("1");
    fall();
  }
}

function fall(){
  clearInterval(moveInterval);
  clearInterval(checkInterval);
}
