const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay() {
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('zero').addEventListener('click', () => appendNumber('0'));
document.getElementById('one').addEventListener('click', () => appendNumber('1'));
document.getElementById('two').addEventListener('click', () => appendNumber('2'));
document.getElementById('three').addEventListener('click', () => appendNumber('3'));
document.getElementById('four').addEventListener('click', () => appendNumber('4'));
document.getElementById('five').addEventListener('click', () => appendNumber('5'));
document.getElementById('six').addEventListener('click', () => appendNumber('6'));
document.getElementById('seven').addEventListener('click', () => appendNumber('7'));
document.getElementById('eight').addEventListener('click', () => appendNumber('8'));
document.getElementById('nine').addEventListener('click', () => appendNumber('9'));

document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));

document.getElementById('equals').addEventListener('click', calculate);
