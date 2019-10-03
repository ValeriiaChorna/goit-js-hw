console.log('Задание 5, см.alert');

let message;
let price;
let userCountry = prompt('Введите название страны доставки:');

userCountry = userCountry.toLowerCase();

switch (userCountry) {
  case 'китай':
    userCountry = 'Китай';
    price = 100;
    message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;
    break;

  case 'чили':
    userCountry = 'Чили';
    price = 250;
    message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;
    break;

  case 'австралия':
    userCountry = 'Австралия';
    price = 170;
    message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;
    break;

  case 'индия':
    userCountry = 'Индия';
    price = 80;
    message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;
    break;

  case 'ямайка':
    userCountry = 'Ямайка';
    price = 120;
    message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
}

alert(message);
