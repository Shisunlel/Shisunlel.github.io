var tracker = 6;
var colors = [];
var goldenColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var difficultyBtn = document.querySelectorAll(".difficulty");

init();

function init() {
  //difficultybtn eventlistener
  defineDifficultyButton();
  //squares
  defineSquare();
  reset();
}

function defineDifficultyButton() {
  for (var i = 0; i < difficultyBtn.length; i++) {
    difficultyBtn[i].addEventListener("click", function () {
      difficultyBtn[0].classList.remove("selected");
      difficultyBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (tracker = 3) : (tracker = 6);
      reset();
    });
  }
  return i;
}

function defineSquare() {
  for (var i = 0; i < squares.length; i++) {
    //add event listener
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to goldencolor
      if (clickedColor === goldenColor) {
        messageDisplay.style.color = "green";
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.style.color = "red";
        messageDisplay.textContent = "Try Agane!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColor(tracker);
  //pick new random colors from array
  goldenColor = pickColor();
  //change color display to match golden color
  colorDisplay.textContent = goldenColor;
  resetButton.textContent = "New Colors";
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function () {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   tracker = 3;
//   colors = generateRandomColor(tracker);
//   goldenColor = pickColor();
//   colorDisplay.textContent = goldenColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//   h1.style.backgroundColor = "steelblue";
//   messageDisplay.textContent = "";
// });

// hardBtn.addEventListener("click", function () {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   tracker = 6;
//   colors = generateRandomColor(tracker);
//   goldenColor = pickColor();
//   colorDisplay.textContent = goldenColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
//   h1.style.backgroundColor = "steelblue";
//   messageDisplay.textContent = "";
// });

resetButton.addEventListener("click", function () {
  reset();
});

function changeColor(color) {
  //loop all square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //change color to goldencolor
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(number) {
  //array
  var arr = [];
  //add number to array
  for (var i = 0; i < number; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a red from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a red from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
