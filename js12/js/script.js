'use strict'

// Получить заголовок "Калькулятор верстки"
let listOfTitles = document.getElementsByTagName('h1');
const title = listOfTitles[0];

// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. HTMLCollection
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

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
const totalCountRollback = totalInputs[4];

// Получить все блоки с классом screen в изменяемую переменную
let screens = document.querySelectorAll('.screen');

let appData = {
  title: '',
  screens: [],
  totalScreens: 0, //общее количество типов экранов
  isError: false,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  totalMinusRollback: 0,
  sevicePricesPercent: 0,
  sevicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePrice: 0,

  init: function () {
    appData.addTitle();

    startBtn.addEventListener('click', appData.addScreens);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    rangeInput.addEventListener('input', function () {
      rangeValue.innerHTML = rangeInput.valueAsNumber + '%'
      // значение rangeInput заноситься в свойство rollback нашего объекта для последующих расчетов!
      appData.rollback = rangeInput.valueAsNumber

    })
  },

  start: function () {
    // appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.logger();
    console.log(appData);
    appData.showResult();
  },

  // Метод  выводит результаты на экран
  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.sevicePricesPercent + appData.sevicePricesNumber
    fullTotalCount.value = appData.fullPrice
    totalCountRollback.value = appData.totalMinusRollback
    totalCount.value = appData.totalScreens
  },
  // Метод проверяет  на заполнение инпут и селект блоке 'Расчет по типу экрана' и запрещает кнопке запускать калькулятор
  // checkInputs: function () {
  //   screens = document.querySelectorAll('.screen');
  //   appData.isError = false;

  //   screens.forEach(function (screen) {
  //     let select = screen.querySelector('select');
  //     let input = screen.querySelector('input[type=text]');

  //     // if (select.selectedIndex == 0 || input.value == '') {
  //     //   appData.isError = true;
  //     //   // startBtn.disabled = 'disabled';
  //     // }
  //     // // console.log(select.selectedIndex.)
  //     // if(!appData.isError) {
  //     //   appData.start()
  //     // }
  //     // console.log(appData.screens[0].price)

  //   })
  // },

  // Метод заполняет свойсво  screens обьектами
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      let select = screen.querySelector('select');
      let input = screen.querySelector('input[type=text]');
      let selectName = select.options[select.selectedIndex].textContent
      // console.dir(option);

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      })
    });
    // console.log('output', appData.screens[0].price)
    // console.log('output', appData.screens[1].price)

    for (let screen of appData.screens) {
      if (screen.price == 0) {
        appData.isError = true
        // alert('need num')
        // console.log('0')
      } 
    }

    if (appData.isError == false) {
      appData.start()
    }
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.servicesNumber) {
      appData.sevicePricesNumber += appData.servicesNumber[key]
    }

    for (let key in appData.servicesPercent) {
      appData.sevicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    // Считаю количество экранов
    for (let screen of appData.screens) {
      appData.totalScreens += +screen.count
    }

    appData.fullPrice = +appData.screenPrice + appData.sevicePricesNumber + appData.sevicePricesPercent

    appData.totalMinusRollback = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },

  logger: function () {
    for (let key in appData) {
      console.log('свойство-' + key + " " + 'значение-' + appData[key]);
    }
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      let check = item.querySelector('input[type=checkbox]');
      let label = item.querySelector('label');
      let input = item.querySelector('input[type=text]');

      if (check.checked) {
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

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    console.log('клонированная нода', cloneScreen);
  },

  addTitle: function () {
    document.title = `${title.textContent} + 1`;
  }
}

appData.init();



