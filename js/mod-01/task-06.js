let input;
let total = 0;

while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += input;
  }
}

alert(`Общая сумма чисел равна ${total}`);
