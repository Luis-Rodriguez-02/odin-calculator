// OPERATOR FUNCTIONS
function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
 return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  if (b === 0) {
    return `Nice try -> cannot divide by zero`;
  }
  return (a / b);
}

// GLOBAL OPERATION VARIABLES
let leftOperand = 0;
let rightOperand = 0;
let operator = null;

// OPERATE FUNCTION
function operate(leftNum, operator, rightNum) {
  switch(operator) {
    case "+":
      return add(leftNum, rightNum);
    case "-":
      return subtract(leftNum, rightNum);
    case "*":
      return multiply(leftNum, rightNum);
    case "/":
      return divide(leftNum, rightNum);
    default:
      return `Invalid operator`;
  }
}