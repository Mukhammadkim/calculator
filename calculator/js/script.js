let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value !== '' && !isNaN(display.value[display.value.length - 1])) {
    display.value += ' ' + operator + ' ';
  }
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/\s/g, ''));
  } catch (error) {
    display.value = 'Ошибка';
  }
}
