'use strict'

let title = 'projectName',
  screens = 'easy,  hard,  interactive',
  screenPrice,
  rollback = 10,
  fullPrice = 20000,
  adaptive = true,
  service1 = '',
  service2 = '',
  servicePrice,
  servicePercentPrice = 0,
  backPercentage = 0,
  allServicePrices = 0;

// console.log(isNaN(2));

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function () {
  // title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
  title = getTitle();

  screens = prompt('Какие типы экранов нужно разработать?', 'desktop, tablet, mobile').toLowerCase().split(', ');

  screenPrice = prompt('Сколько будет стоить данная работа', '6330');

  while (!isNumber(screenPrice)) {
    screenPrice = prompt('Сколько будет стоить данная работа', '6330');
  }

  adaptive = confirm('Нужен ли адаптив на сайте?');
}
//=======блок объявления функций-==-=======

// Функция возвращает сумму всех дополнительных услуг.
const getAllServicePrices = function () {

  let sum = 0;
  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM');
    }

    do {
      screenPrice = prompt('Сколько будет стоить данная работа?', '1000');
    } while (!isNumber(screenPrice));

    sum += parseInt(servicePrice);
    // console.log('type of data', typeof sum);
  }

  return sum;
};

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice() {
  return screenPrice + allServicePrices;
}

// Функция возвращает title меняя его таким образом:
function getTitle() {
  let title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');

  title = title.trim();
  title = title[0].toUpperCase() + title.slice(1).toLowerCase();
  return title;
}

// Функция возвращает итоговую стоимость за вычетом процента отката.
function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100));
}

// Функция  выводит в консоль - сообщение о скидке пользователю
function getRollbackMessage(sum) {

  switch (true) {

    case sum >= 30000:
      console.log('Даем скидку в 10%');
      break;

    case sum >= 15000:
      console.log('Даем скидку в 5%');
      break;

    case sum > 0:
      console.log('Скидка не предусмотренa');
      break;

    case sum <= 0:
      console.log('то то пошло не так');
      break;
  }
}

//=======блок  вычислений -==-=======
asking();
// title = getTitle();

getRollbackMessage(fullPrice);

servicePercentPrice = getServicePercentPrices(); //  итоговую стоимость

allServicePrices = getAllServicePrices();

fullPrice = getFullPrice();

// fullPrice = screenPrice + servicePrice1 + servicePrice2;


// servicePercentPrice = Math.ceil(fullPrice - backPercentage);


// Почистить консоль логи и добавить недостающие, должны остаться:

console.log('тип данных: ' + title + ' ' + typeof (title));
console.log('тип данных: ' + fullPrice + ' ' + typeof (fullPrice));
console.log('тип данных: ' + adaptive + ' ' + typeof (adaptive));

console.log('строкa из переменной screens в виде массива: ', screens);

console.log('стоимость за вычетом процента отката посреднику: ', servicePercentPrice);

console.log('allServicePrices -  сума доп услуг ', allServicePrices);
