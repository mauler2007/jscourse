'use strict'

let title = 'projectName',
  screens = 'easy,  hard,  interactive',
  screenPrice = 1500,
  rollback = 10,
  fullPrice = 5020,
  adaptive = true;

console.log('тип данных: ' + typeof (title));
console.log('тип данных: ' + typeof (fullPrice));
console.log('тип данных: ' + typeof (adaptive));

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');

console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');

let newArr = screens.toLowerCase().split(', ');
// console.log(newArr);



title = prompt('Как называется ваш проект?', 'projectName');

screens = prompt('Какие типы экранов нужно разработать?', 'desktop,tablet');

screenPrice = +prompt('Сколько будет стоить данная работа', '6330');

adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO'),
  servicePrice1 = +prompt('Сколько это будет стоить?', '1000'),
  service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM'),
  servicePrice2 = +prompt('Сколько это будет стоить?', '1000');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let backPercentage = fullPrice * (rollback / 100); //Процент отката посреднику за работу
console.log('Процент отката посреднику за работу: ' + backPercentage);

let servicePercentPrice = Math.ceil(fullPrice - backPercentage);

console.log('Итоговая стоимость: ', servicePercentPrice);

switch (true) {

  case fullPrice >= 30000:
    console.log('Даем скидку в 10%');
    break;

  case fullPrice >= 15000:
    console.log('Даем скидку в 5%');
    break;

  case fullPrice > 0:
    console.log('Скидка не предусмотренa');
    break;

  case fullPrice <= 0:
    console.log('то то пошло не так');
    break;
}
