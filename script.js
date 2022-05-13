const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
let result;
let a;
let b;

function toFixedIfNecessary(result, dp) {
  return +parseFloat(result).toFixed(dp);
}

function add(a, b) {
  result = a + b;
  result = toFixedIfNecessary(result, 6);
  equals.classList.remove('add', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
} 

function subtract(a, b) {
  result = a - b;
  result = toFixedIfNecessary(result, 6);
  equals.classList.remove('subtract', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
}

function multiply(a, b) {
  result = a * b;
  result = toFixedIfNecessary(result, 6);
  equals.classList.remove('multiply', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
}

function divide(a, b) {
  result = a / b;
  result = toFixedIfNecessary(result, 6);
  equals.classList.remove('divide', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
}

function operate(a, b) {
  a = Number(a);
  b = Number(b);
  equals.classList.add('operate');
  if (equals.classList.contains('add')) {
    return add(a, b);
  }
  if (equals.classList.contains('subtract')) {
    return subtract(a, b);
  }
  if (equals.classList.contains('multiply')) {
    return multiply(a, b);
  }
  if (equals.classList.contains('divide')) {
    return divide(a, b);
  }
}

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (equals.classList.contains('keepGoing')) {
      equals.classList.remove('keepGoing');
      a = result;
    }
    if (equals.classList.contains('operate')) {
      if (equals.classList.contains('first'))  {
        equals.classList.remove('first');
        info.textContent = number.textContent;
        return b = number.textContent;
      }
      info.textContent += number.textContent;
      return b += number.textContent;
    }
    if (equals.classList.contains('first'))  {
      equals.classList.remove('first');
      info.textContent = number.textContent;
      return a = number.textContent;
    }
    info.textContent += number.textContent;
    return a += number.textContent;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    equals.classList.remove('add', 'subtract', 'multiply', 'divide');
    equals.classList.add('operate', 'first');
    if (operator.classList.contains('add')) {
      return equals.classList.add('add');
    }
    if (operator.classList.contains('subtract')) {
      return equals.classList.add('subtract');
    }
    if (operator.classList.contains('multiply')) {
      return equals.classList.add('multiply');
    }
    if (operator.classList.contains('divide')) {
      return equals.classList.add('divide');
    }
  })
})

equals.addEventListener('click', () => {
  operate(a, b);
})