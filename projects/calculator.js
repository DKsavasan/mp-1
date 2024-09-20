// Addition
function add() {
  const num1 = parseFloat(document.getElementById("first-number").value);
  const num2 = parseFloat(document.getElementById("second-number").value);
  const result = num1 + num2;
  displayResult(result);
}

// Subtraction
function subtract() {
  const num1 = parseFloat(document.getElementById("first-number").value);
  const num2 = parseFloat(document.getElementById("second-number").value);
  const result = num1 - num2;
  displayResult(result);
}

// Multiplication
function multiply() {
  const num1 = parseFloat(document.getElementById("first-number").value);
  const num2 = parseFloat(document.getElementById("second-number").value);
  const result = num1 * num2;
  displayResult(result);
}

// Division
function divide() {
  const num1 = parseFloat(document.getElementById("first-number").value);
  const num2 = parseFloat(document.getElementById("second-number").value);
  if (num2 === 0) {
    displayResult("Error! Division by zero.");
  } else {
    const result = num1 / num2;
    displayResult(result);
  }
}

// Power
function power() {
  const base = parseFloat(document.getElementById("first-number").value);
  const exponent = parseInt(document.getElementById("second-number").value);
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  displayResult(result);
}

// Clear
function clearCalc() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}

// Display
function displayResult(result) {
  const outputElement = document.getElementById("output");
  if (result < 0) {
    outputElement.style.color = "red";
  } else {
    outputElement.style.color = "black";
  }
  outputElement.innerHTML = result;
}
