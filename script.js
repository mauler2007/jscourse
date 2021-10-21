'use strict'

// let title = 'projectName',
//   screens = 'easy,  hard,  interactive',
//   screenPrice = 0,
//   rollback = 10,
//   fullPrice = 20000,
//   adaptive = true,
//   service1 = '',
//   service2 = '',
//   servicePrice = 0,
//   servicePercentPrice = 0,
//   // backPercentage = 0,
//   allServicePrices = 0;
const appData = {
  title: 'projectName',
  screens: 'easy,  hard,  interactive',
  screenPrice: 0,
  rollback: 10,
    // Метод возвращает сумму стоимости верстки и стоимости дополнительных услуг
  fullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  adaptive: true,
  servicePrice: 0,
    // Метод возвращает итоговую стоимость за вычетом процента отката.
  servicePercentPrice: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
    // Метод возвращает сумму всех дополнительных услуг.
  allServicePrices: function () {

    let sum = 0;
    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM');
      }

      do {
        appData.servicePrice = +prompt('Сколько будет стоить данная работа?', '1000');
      } while (!appData.isNumber(appData.servicePrice));

      sum += parseInt(appData.servicePrice);
    }

    return sum;
  },
  service1: '',
  service2: '',
  asking: function () {

     // Метод возвращает title меняя его таким образом:
    appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');

    appData.title = appData.title.trim();
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
    
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'desktop, tablet, mobile').toLowerCase().split(', ');

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа', '6330');
    } while (!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  
    
  

  // backPercentage = 0,
}

//=======блок объявления функций-==-=======








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
appData.asking();
// title = getTitle();
getRollbackMessage(appData.fullPrice);

// appData.allServicePrices = appData.getAllServicePrices();

// appData.fullPrice = getFullPrice();

// appData.servicePercentPrice = getServicePercentPrices(); //  итоговую стоимость


// Почистить консоль логи и добавить недостающие, должны остаться:

// console.log('тип данных: ' + title + ' ' + typeof (title));
// console.log('тип данных: ' + fullPrice + ' ' + typeof (fullPrice));
// console.log('тип данных: ' + adaptive + ' ' + typeof (adaptive));

console.log('строкa из переменной screens в виде массива: ', appData.screens);

console.log('стоимость за вычетом процента отката посреднику: ', appData.servicePercentPrice());

console.log('allServicePrices -  сума доп услуг ', appData.allServicePrices());
