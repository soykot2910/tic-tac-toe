var gor1 = document.querySelector(".gor1");
var gor2 = document.querySelector(".gor2");
var gor3 = document.querySelector(".gor3");
var gor4 = document.querySelector(".gor4");
var gor5 = document.querySelector(".gor5");
var gor6 = document.querySelector(".gor6");
var gor7 = document.querySelector(".gor7");
var gor8 = document.querySelector(".gor8");
var gor9 = document.querySelector(".gor9");
var winner = document.querySelector("#winner");

var All = document.querySelectorAll(".round");

// gor1.addEventListener("click", function () {
//   console.log("c");
//   gor1.innerHTML = "X";
// });

var player = "x";
var count = 0;

All.forEach((gor) => {
  gor.addEventListener("click", function () {
    gor.innerHTML = player;
    count++;
    console.log(count);
    if (count > 4) {
      checkWin();
    }
    if (player === "x") {
      player = "0";
    } else {
      player = "x";
    }
  });
});

function checkWin() {
  if (
    gor1.innerHTML == gor2.innerHTML &&
    gor2.innerHTML == gor3.innerHTML &&
    gor3.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor4.innerHTML == gor4.innerHTML &&
    gor5.innerHTML == gor6.innerHTML &&
    gor6.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor7.innerHTML == gor8.innerHTML &&
    gor8.innerHTML == gor9.innerHTML &&
    gor9.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor1.innerHTML == gor4.innerHTML &&
    gor4.innerHTML == gor7.innerHTML &&
    gor7.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor2.innerHTML == gor5.innerHTML &&
    gor5.innerHTML == gor8.innerHTML &&
    gor8.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor3.innerHTML == gor6.innerHTML &&
    gor6.innerHTML == gor9.innerHTML &&
    gor9.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor1.innerHTML == gor5.innerHTML &&
    gor5.innerHTML == gor9.innerHTML &&
    gor9.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  } else if (
    gor3.innerHTML == gor5.innerHTML &&
    gor5.innerHTML == gor7.innerHTML &&
    gor7.innerHTML == player
  ) {
    winner.innerHTML = "Winner: " + player;
  }
}
