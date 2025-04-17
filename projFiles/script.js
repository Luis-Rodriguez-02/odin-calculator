// Basic math functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Dont divide by zero";
  return a / b;
}

// leftNum operator rightNum
let leftNum;
let operator;
let rightNum;

// Function to calculate operation
function operate(operator) {
  switch (operator) {
    case "+":
      add(leftNum, rightNum);
      break;
    case "-":
      subtract(leftNum, rightNum);
      break;
    case "*":
      multiply(leftNum, rightNum);
      break;
    case "/":
      divide(leftNum, rightNum);
      break;
    default:
      console.log("Invalid operator");
  }
}
