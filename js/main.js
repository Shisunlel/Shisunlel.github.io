var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var goldenColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColor(6);
  //pick new random colors from array
  goldenColor = pickColor();
  //change color display to match golden color
  colorDisplay.textContent = goldenColor;
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = goldenColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  //add event listener
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to goldencolor
    if (clickedColor === goldenColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Agane!";
    }
  });
}

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
  for (var i = 0; i <= number; i++) {
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
