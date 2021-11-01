'use strict'

let appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,

  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  servicePrice: 0,
  getNumberFormUser: function (message, defaultMessage) {
    let number = 0;
    do {
      number = prompt(message, defaultMessage);
    } while (!appData.isNumber(number))
    return parseFloat(number);
  },

  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
    } while (appData.title == null || appData.isNumber(appData.title))
    // } while (typeof (parseFloat(appData.title) === Number) && appData.title == null && appData.title !== String)

    do {
      appData.screens = prompt('Какие типы экранов нужно разработать?', 'desktop, tablet, mobile')
    } while (appData.screens == null || appData.isNumber(appData.screens))
    // console.log('split', appData.screens.toLowerCase().split(', '));

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа', '6330');
    } while (!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  // Метод возвращает сумму всех дополнительных услуг.
  getAllServicePrices: function () {

    let sum = 0;
    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        
        do {
          appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO');
        } while (appData.isNumber(appData.service1));
        
      } else if (i === 1) {

        do {
          appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM');
        } while (appData.isNumber(appData.service2));
      }

      do {
        appData.getNumberFormUser('Сколько будет стоить данная работа?', '1000')
      } while (!appData.isNumber(appData.servicePrice));

      sum += parseInt(appData.servicePrice);
    }

    return sum;
  },
  // Метод возвращает сумму стоимости верстки и стоимости дополнительных услуг
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  // Метод возвращает итоговую стоимость за вычетом процента отката.
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  // Метод возвращает title меняя его таким образом:
  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
    return appData.title;
  },
  // Метод  выводит в консоль - сообщение о скидке пользователю
  getRollbackMessage: function (sum) {
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
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log('свойство-' + key + " " + 'значение-' + appData[key]);
    }
  }
}

appData.start();









//=======блок  вычислений -==-=======
// title = getTitle();


// appData.allServicePrices = getAllServicePrices();


// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);
// console.log(appData.allServicePrices());

// Почистить консоль логи и добавить недостающие, должны остаться:

// console.log('тип данных: ' + title + ' ' + typeof (title));
// console.log('тип данных: ' + fullPrice + ' ' + typeof (fullPrice));
// console.log('тип данных: ' + adaptive + ' ' + typeof (adaptive));

// console.log('строкa из переменной screens в виде массива: ', screens);

// console.log('стоимость за вычетом процента отката посреднику: ', servicePercentPrice);

// console.log('allServicePrices -  сума доп услуг ', allServicePrices);
