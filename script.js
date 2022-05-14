const info = document.querySelector('.calcInfo');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('.clear');
let result;
let a;
let b;

// Result has a maximum decimal point place of 15. 

function toFixedIfNecessary(result, dp) {
  return +parseFloat(result).toFixed(dp);
}

// Function that converts number to a decimal point 2 places away to a maximum of 15.

function insertDecimal(num)  {
  num = (num / 100);
  return toFixedIfNecessary(num, 15); 
}

// Basic calculations

function add(a, b) {
  result = a + b;
  result = toFixedIfNecessary(result, 15);
  equals.classList.remove('add', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
} 

function subtract(a, b) {
  result = a - b;
  result = toFixedIfNecessary(result, 15);
  equals.classList.remove('subtract', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
}

function multiply(a, b) {
  result = a * b;
  result = toFixedIfNecessary(result, 15);
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
  result = toFixedIfNecessary(result, 15);
  equals.classList.remove('divide', 'operate');
  equals.classList.add('keepGoing');
  return info.textContent = result;
}

// Calls the correct function to calculate

function operate(a, b) {
  a = Number(a);
  b = Number(b);
  equals.classList.add('operate');
  operators.forEach(operator => operator.classList.remove('active'));
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

// Listens for number clicked and inputs it.

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (info.textContent.length > 20) return; // FIX!!!
    if (equals.classList.contains('operate')) { // Switches to b.
      if (equals.classList.contains('first'))  { // Only used once per calculation.
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

// Listens for operators and other miscellaneous buttons and properly switches to them.

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.classList.contains('decimal')) { // Inputs a decimal
      if (/[^\d]/.test(info.textContent) || equals.classList.contains('first')) return;
      info.textContent += '.';
      if (equals.classList.contains('operate')) {
        return b += '.'; 
      } else {
        return a += '.';
      }
    }
    if (operator.classList.contains('percent')) { // Adds decimal two points inwards
      if (equals.classList.contains('operate')) {
        b = insertDecimal(b);
        return info.textContent = b;
      }
      a = insertDecimal(a);
      return info.textContent = a;
    }
    if (operator.classList.contains('changeSign')) { // Flips between positive and negative
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
    operators.forEach(operator => operator.classList.remove('active'));
    operator.classList.add("active");
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

equals.addEventListener('click', () => { // When equal is clicked it operates num 1 and num 2.
  operate(a, b);
})

clear.addEventListener('click', () => { // Clears All.
  info.textContent = "N/A";
  operators.forEach(operator => operator.classList.remove('active'));
  a = 0;
  b = 0;
  equals.classList.remove(...equals.classList);
  equals.classList.add('first');
})

window.addEventListener('click', () => { // 'a' will properly = result regardless of which button is clicked.
  if (equals.classList.contains('keepGoing')) {
    equals.classList.remove('keepGoing');
    a = result;
  }
})