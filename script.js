const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('.clear');
let result;
let a;
let b;

function toFixedIfNecessary(result, dp) {
  return +parseFloat(result).toFixed(dp);
}

function insertDecimal(num)  {
  num = (num / 100);
  return toFixedIfNecessary(num, 6); 
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
  if (b === 0) {
    info.textContent = "Come on son";
    equals.classList.remove(...equals.classList);
    return equals.classList.add('first');
  }
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
    if (operator.classList.contains('decimal')) {
      if (/[^\d]/.test(info.textContent) || equals.classList.contains('first')) return;
      info.textContent += '.';
      if (equals.classList.contains('operate')) {
        return b += '.'; 
      } else {
        return a += '.';
      }
    }
    if (operator.classList.contains('percent')) {
      if (equals.classList.contains('operate')) {
        b = insertDecimal(b);
        return info.textContent = b;
      }
      a = insertDecimal(a);
      return info.textContent = a;
    }
    if (operator.classList.contains('changeSign')) {
      if (equals.classList.contains('operate')) {
        if (b.substring(0,1) !== '-') {
          b = "-" + b;
          return info.textContent = b;
        } else {
          b = b.replace(/[^\d\.]/, '');
          return info.textContent = b;
        }
      }
      if (a.substring(0,1) !== '-') {
        a = "-" + a;
        return info.textContent = a;
      } else {
        a = a.replace(/[^\d\.]/, '');
        return info.textContent = a;
      }
    }

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

clear.addEventListener('click', () => {
  info.textContent = "N/A";
  a = 0;
  b = 0;
  equals.classList.remove(...equals.classList);
  equals.classList.add('first');
})

window.addEventListener('click', () => {
  if (equals.classList.contains('keepGoing')) {
    equals.classList.remove('keepGoing');
    a = result;
  }
})