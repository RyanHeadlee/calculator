let result;
const buttons = document.querySelectorAll('.buttonsContainer button')

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

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
  });
});