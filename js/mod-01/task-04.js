const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const orderedQuantity = prompt('Какое количество дроидов Вы хотите купить?');

switch (orderedQuantity) {
  case null:
    message = 'Отменено пользователем!';
    break;

  default:
    totalPrice = pricePerDroid * orderedQuantity;
}

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${credits
    - totalPrice} кредитов.`;
}

console.log(message);
