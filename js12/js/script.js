'use strict'

// Получить заголовок "Калькулятор верстки"
let listOfTitles = document.getElementsByTagName('h1');
const title = listOfTitles[0];

// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. HTMLCollection
let buttons = document.getElementsByClassName('handler_btn');
const startBtn = buttons[0];
const resetBtn = buttons[1];

// Получить кнопку "+" под выпадающим списком через метод querySelector.
const buttonPlus = document.querySelector('button.screen-btn');

// Получить все элементы с классом other - items в две разные переменные
let otherItemsPercent = document.querySelectorAll('.other-items.percent')

let otherItemsNumber = document.querySelectorAll('.other-items.number')

// Получить input type = range через его родителя с классом rollback
const rangeInput = document.querySelector('.rollback [type="range"]')

// Получить span с классом range - value через его родителя с классом rollback
const rangeValue = document.querySelector('.rollback span')

// Получить все инпуты с классом total - input справа 
// получить именно элементы
let totalInputs = document.getElementsByClassName('total-input');

const total = totalInputs[0];
const totalCount = totalInputs[1];
const totalCountOther = totalInputs[2];
const fullTotalCount = totalInputs[3];
const totalCountRollback = totalInputs[5];

// Получить все блоки с классом screen в изменяемую переменную
let screens = document.querySelectorAll('.screen');

let appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  sevicePricesPercent: 0,
  sevicePricesNumber: 0,

  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePrice: 0,

  init: function () {
    appData.addTitle();

    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
  },

  start: function () {
    appData.addScreens();
    appData.addServices();

    appData.addPrices();
    // appData.getServicePercentPrice() 

    // appData.logger();
    console.log(appData);
    appData.showResult();
  },

  showResult: function() {
    total.value = appData.screenPrice
    totalCount.value = appData.sevicePricesPercent + appData.sevicePricesNumber
    fullTotalCount.value = appData.fullPrice
  },

  // Метод заполняет свойсво  screens обьектами
  addScreens: function () {
    // console.log('screenBlocks');
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index, screens) {
      let select = screen.querySelector('select');
      let input = screen.querySelector('input[type=text]');
      let selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
    });

    console.log('Это appData.screens', appData.screens);
  },

  addPrices: function() {
    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.servicesNumber) {
      appData.sevicePricesNumber += appData.servicesNumber[key]
    }

    for (let key in appData.servicesPercent) {
      appData.sevicePricesPercent += appData.screenPrice * (appData.servicesPercent[key])
    }

    appData.fullPrice = +appData.screenPrice + appData.sevicePricesNumber + appData.sevicePricesPercent
  },

  // Метод возвращает итоговую стоимость за вычетом процента отката.
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      let check = item.querySelector('input[type=checkbox]');
      let label = item.querySelector('label');
      let input = item.querySelector('input[type=text]');

      if(check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function (item) {
      let check = item.querySelector('input[type=checkbox]');
      let label = item.querySelector('label');
      let input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },

  addScreenBlock: function() {
    // screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    // console.log(cloneScreen);
    console.log('клонированная нода',cloneScreen);
  },
  
  addTitle: function () {
    document.title = `${title.textContent} + 1`;
    // console.log(title);
  },

  logger: function () {
    for (let key in appData) {
      console.log('свойство-' + key + " " + 'значение-' + appData[key]);
    }
  }
}



// === блок  вычислений === 
for (let i = 0; i < totalInputs.length; i++) {
  // console.log(totalInputs[i]);
}

appData.init();



