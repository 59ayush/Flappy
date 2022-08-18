var left =0;
function generatePipe(){
  var pipe = $("<img src='images/pipes.png' class='pipe-img' alt='pipe-image'>");
  var height = Math.floor(Math.random() * 40);
  pipe.css("margin-top", height-55 + "vh");
  pipe.css("margin-left", left + "px");
  left += 300;
  $(".pipes-container").append(pipe);
}

function movePipe(){
  $(".heading-container").css({marginLeft: "-=1px"});
  $(".pipes-container").css({marginLeft: "-=1px", width: "+=1px"});
}

generatePipe();
generatePipe();
var making = setInterval(generatePipe, 500);
var moving = setInterval(movePipe, 0.1);

function stopPipe(){
  clearInterval(making);
  clearInterval(moving);
}

function check(){
  var p = $(".check").text();
  if (p == 1){
    stopPipe();
  }
}

setInterval(check, 0.1);
