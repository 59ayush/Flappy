var netWidth;
var pipeWidth;
var netHeight;
setTimeout(function(){
  netWidth = document.getElementsByTagName("body")[0].offsetWidth;
  pipeWidth = document.getElementsByClassName("pipe-img")[0].offsetWidth;
  pipeWidth += 100;

  console.log(netWidth);
  console.log(pipeWidth);
}, 1010);

var next = 300;
var ind = 0;
var flag = 0;
var score = 0;
function check(){
  var left = $(".pipes-container").css("margin-left");
  left = parseInt(left, 10);
  //console.log(left);
  if ((left <= next + 45) && (left >= next - 120)){
    flag = 1;
    var temp = collide();
    if ($(".check").text() == 1){
      console.log(1);
      clearInterval(checkInterval);
    };
    next -= pipeWidth;
    next -= 69;
    ++ind;
  }
  else{
    if (flag == 1){
      flag = 0;
      ++score;
      var scoreP = $(".score");
      scoreP.text("Score: " + score);
    }
  }
}

var checkInterval = setInterval(check, 10);


function collide(){
  var pipes = document.querySelectorAll(".pipe-img");
  var height = pipes[ind].style.marginTop;
  height = parseInt(height, 10);
  height += 75;
  netHeight = $(document).height();
  height = netHeight * height * 0.01;

  var ans = false;
  var jump = setInterval(function() {
    var curr = $(".bird").css("margin-top");
    curr = parseInt(curr, 10);
    curr += 35;
    if (Math.abs(curr - height) >= 90){
      console.log(-1);
      $(".check").text('1');
    }
  }, 1);
  setTimeout(function(){
    clearInterval(jump);
  }, 800);
  return ans;
}
