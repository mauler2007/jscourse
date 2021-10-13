'use strict'


let title = 'projectName',
  screens = 'easy, hard, interactive',
  screenPrice = 1500,
  rollback = 10,
  fullPrice = 5020,
  adaptive = true;

// Функция возвращает сумму всех дополнительных услуг.
let allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
}

// Функция возвращает сумму стоимости вёрстки и стоимости дополнительных услуг
function getFullPrice() {
  return screenPrice + allServicePrices();
}


// Функция возвращает итоговую стоимость за вычетом процента отката.
let getServicePercentPrices = function () {
  return allServicePercentPrice - backPercentage;
}
// console.log(" делаю , что говорит Руслан", servicePercentPrice);

let servicePercentPrice = getServicePercentPrices();

function getTitle() {
  title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
  title = title.toUpperCase().trim().substring(0, 1) + title.trim().toLowerCase().substring(1);
  return title;
}

console.log('Название проекта: ', getTitle());

function showTypeOf(variable) {
  console.log(typeof (variable));
}

screenPrice = +prompt('Сколько будет стоить данная работа', '6330');

adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO'),
  servicePrice1 = +prompt('Сколько это будет стоить?', '1000'),
  service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM'),
  servicePrice2 = +prompt('Сколько это будет стоить?', '1000');

let backPercentage = getFullPrice() * (rollback / 100); //Процент отката посреднику за работу

let allServicePercentPrice = Math.ceil(getFullPrice() - backPercentage);

function getRollbackMessage(price) {

  switch (true) {

    case price >= 30000:
      return 'Даем скидку в 10%';
      break;

    case price >= 15000:
      return 'Даем скидку в 5%';
      break;

    case price > 0:
      return 'Скидка не предусмотренa';
      break;

    case price <= 0:
      return 'то то пошло не так';
      break;
  }
}

console.log('Итоговая стоимость минус сумма отката ', servicePercentPrice);
// Выше Вывожу так как ты просил, хоть и не понятно воообще зачем нам сама функция , т.е. ее тело вместо  рассчитанного результата ?  Я   думал что нужна имеено цифра  - результат а он составлет 6664

console.log('Ваша скидка: ', getRollbackMessage(getFullPrice()));

console.log('Cтрокa из переменной screens в виде массива', screens);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);






