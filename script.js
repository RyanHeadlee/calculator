let result;
const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

function add(a, b) {
  result = a + b;
  return result;
} 

function subtract(a, b) {
  result = a - b;
  return result;
}

function multiply(a, b) {
  result = a * b;
  return result;
}

function divide(a, b) {
  result = a / b;
  return result;
}

numbers.forEach(number => {
  number.addEventListener('click', () => {
    info.textContent = number.textContent;
  });
});