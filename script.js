const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
let result;
let a;
let b;

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
    if (info.textContent == '0')  {
      info.textContent = number.textContent;
      return a = number.textContent;
    }
    info.textContent += number.textContent;
    return a += number.textContent;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.classList.contains('add')) {
      return equals.classList.add('add');
    }
  })
})

equals.addEventListener('click', () => {
  if (equals.classList.contains('add')) {
    return add(a, b);
  }
})