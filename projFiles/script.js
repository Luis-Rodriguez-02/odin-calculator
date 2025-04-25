// Basic math functions

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  if (b === 0) {
    return 0;
  }
  return +a / +b;
}

// leftNum operator rightNum
let leftNum;
let total = 0;
let rightNum;

// Function to calculate operation
function operate(operator, leftNum, rightNum) {
  switch (operator) {
    case "+":
      console.log("here");
      return add(leftNum, rightNum);
    case "-":
      return subtract(leftNum, rightNum);
    case "*":
      return multiply(leftNum, rightNum);
    case "/":
      return divide(leftNum, rightNum);
    default:
      console.log("Invalid operator");
  }
}

let operatorCount = 0;
let dotCount = 0;
let currOperator = "";
const operateBtn = document.querySelector("#equals");
const display = document.querySelector("#display-box");
const clearBtn = document.querySelector("#clear");
const digits = document.querySelectorAll(".digits");
const operators = document.querySelectorAll("#operators");

clearBtn.addEventListener("click", () => {
  display.value = "";
  operatorCount = 0;
  dotCount = 0;
  document.getElementById("dot").disabled = false;
});

// operator clicks
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    currOperator = e.target.textContent;
    document.getElementById("dot").disabled = false;
    e.target.disabled = false;
    if (operatorCount != 1) {
      display.value += " ";
      display.value += e.target.textContent;
      display.value += " ";
      operatorCount++;
      dotCount = 0;
    }
  });
});

// event listener for each digit to append to display
digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    if (e.target.textContent === "." && dotCount == 0) {
      dotCount++;
      document.getElementById("dot").disabled = true;
    }
    display.value += e.target.textContent;
  });
});

// equals button calculate total
operateBtn.addEventListener("click", () => {
  document.getElementById("dot").disabled = false;

  operatorCount--;

  const finalOperation = display.value;
  let operationSplit = finalOperation.split(currOperator);

  let left = operationSplit[0];
  let right = operationSplit[1];
  if (!(operatorCount <= -1)) {
    if (+right === 0 && currOperator === "/") {
      display.value = "Don't divide by zero dummy";
    } else {
      total = operate(currOperator, left, right);
      display.value = total;
    }
  }
});
