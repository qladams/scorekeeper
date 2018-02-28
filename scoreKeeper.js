// For toggleClick

var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p = document.querySelector("p");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score=0;
var p2Score=0;
var gameOver = false;
var winningScore = 5;


p1Btn.addEventListener("click", function(){
    if (!gameOver){
      p1Score++;
      if (p1Score === winningScore){
          p1Display.classList.add("winner");
          gameOver = true;
      }
      p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
          p2Display.classList.add("winner");
          gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetBtn.addEventListener("click", function(){
   reset();
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore =  Number(this.value);
    reset();
});

function reset(){
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = p1Score;
   p2Display.textContent = p2Score;
   p1Display.classList.remove("winner");
   p2Display.classList.remove("winner");
   gameOver = false;
}