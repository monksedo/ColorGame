// Array of random number
let colors = generateRandomColor(6);
// List of colors
/*
let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];
*/
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById('message');
let h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial color to square
  squares[i].style.backgroundColor = colors[i];

  // add click listener to squares
  squares[i].addEventListener('click', function () {
    // grap color of click square
    let clickedColor = this.style.backgroundColor;
    console.log(this.style.backgroundColor);
    // compare color to pickColor
    if (clickedColor === pickedColor) {
      // alert('Correct!');
      message.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      // alert('Wrong!');
      this.style.backgroundColor = '#222222';
      message.textContent = 'Try again!'
    }
  });
};

// Change the color
function changeColors(color) {
  // Loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// Select a random color
function pickColor() {
  let ranColor = Math.floor(Math.random() * colors.length);
  return colors[ranColor];
}

// make a random color loop
function generateRandomColor(num) {
  // make and array
  let arr = [];
  // add num random colors to array
  for (let i = 0; i < num; i++) {
    // Get random color then push to array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

// make random color
function randomColor() {
  // Pick a 'red' from 0 - 255
  let r = Math.floor(Math.random() * 256);
  // Pick a 'green' from 0 - 255
  let g = Math.floor(Math.random() * 256);
  // Pick a blue from 0 - 255
  let b = Math.floor(Math.random() * 256);
  // return the random rgr color 
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}