'use strict'

let title = 'projectName',
  screens = 'easy, hard, interactive',
  screenPrice = 1500,
  rollback = 10,
  fullPrice = 5020,
  adaptive = true;



let newArr = screens.toLowerCase().split(', ');
// console.log(newArr);

// Функция возвращает сумму всех дополнительных услуг.
let allServicePrices = function getAllServicePrices(a, b) {
  return a + b;
}

// Функция возвращает сумму стоимости вёрстки и стоимости дополнительных услуг
function getFullPrice(c, d) {
  return c + d;
}

// Функция возвращает итоговую стоимость за вычетом процента отката.
let servicePercentPrice = function getServicePercentPrices(a, b) {
  return a - b;
}

function getTitle(str) {
  str = ' КаЛьКулятор Верстки'

  if (!str) return str;

  let newArray = str.trim().toLowerCase().split('');
  newArray[0] = 'K';
  let newTitle = newArray.join('');
  title = newTitle;
  return title;
}

function showTypeOf(variable) {
  console.log(typeof (variable));
}

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

let allServicePercentPrice = Math.ceil(fullPrice - backPercentage);

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

console.log('Новое название проекта: ', getTitle(title));

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');

console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');

console.log('сумма всех дополнительных услуг: ', allServicePrices(servicePrice1, servicePrice2));

console.log('суммa стоимости верстки и стоимости дополнительных услуг: ', 

getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2)));

console.log('Процент отката посреднику за работу: ' + backPercentage);

console.log('Итоговая стоимость: ', allServicePercentPrice);

console.log('строкa из переменной screens в виде массива', screens.split(','));
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log('итоговая стоимость минус сумма отката', servicePercentPrice(allServicePercentPrice, backPercentage) )
