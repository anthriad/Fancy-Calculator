// Create functionality for the calculator

const display = document.getElementById('display');

function appendToDisplay(input){ // Places user input onto the display
    display.value += input;
}

function clearDisplay(){ // Clears the display of all user input
    display.value = "";
}

function calculate(){ // Calculates the user input
  try {
    display.value = eval(display.value); // 'eval()' takes an expression and evaluates it
  }
  catch(potentialErrors){
    display.value = "Error";
  }
}
  