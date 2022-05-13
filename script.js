const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
let result;
let a;
let b;

function add(a, b) {
  result = a + b;
  equals.classList.remove('add');
  return info.textContent = result;
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

function operate(a, b) {
  a = Number(a);
  b = Number(b);
  equals.classList.remove('operate');
  if (equals.classList.contains('add')) {
    return add(a, b);
  }
}

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (equals.classList.contains('operate')) {
      if (equals.classList.contains('first'))  {
        equals.classList.remove('first');
        info.textContent = number.textContent;
        return b = number.textContent;
      }
      info.textContent += number.textContent;
      return b += number.textContent;
    }
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
      return equals.classList.add('add', 'operate', 'first');
    }
  })
})

equals.addEventListener('click', () => {
  operate(a, b);
})