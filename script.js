'use strict'

let title = 'projectName',
  screens = 'easy,  hard,  interactive',
  screenPrice = 5000,
  rollback = 10,
  fullPrice = 20000,
  adaptive = true,
  service1 = ' ',
  service2 = '',
  servicePrice1 = 0,
  servicePrice2 = 0,
  servicePercentPrice = 0,
  backPercentage = 0,

  newArr = screens.toLowerCase().split(', ');
// console.log(newArr);

title = prompt('Как называется ваш проект?', 'projectName');

screens = prompt('Какие типы экранов нужно разработать?', 'desktop, tablet');

screenPrice = +prompt('Сколько будет стоить данная работа', '6330');

adaptive = confirm('Нужен ли адаптив на сайте?');

service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO'),
  servicePrice1 = +prompt('Сколько это будет стоить?', '1000'),
  service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM'),
  servicePrice2 = +prompt('Сколько это будет стоить?', '1000');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

backPercentage = fullPrice * (rollback / 100); //Процент отката посреднику за работу

console.log('Процент отката посреднику за работу: ' + backPercentage);

servicePercentPrice = Math.ceil(fullPrice - backPercentage);


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


console.log('тип данных: ' + title + ' ' + typeof (title));
console.log('тип данных: ' + fullPrice + ' ' + typeof (fullPrice));
console.log('тип данных: ' + adaptive + ' ' + typeof (adaptive));

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');

console.log('Итоговая стоимость: ', servicePercentPrice);

console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');