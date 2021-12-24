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

// все input[type = text] и select с левой стороны
let elemsDisabled = document.querySelectorAll('.main-controls input[type=checkbox], .screen select[name="views-select"], .screen input[type="text"]')

// function thisIs() {
//   .bind()
// }

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
    this.addTitle();
    startBtn.addEventListener('click', appData.addScreens);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    rangeInput.addEventListener('input', () => {
      rangeValue.innerHTML = rangeInput.valueAsNumber + '%'
      this.rollback = rangeInput.valueAsNumber
    })
  },

  start: function () {
    // appData.addScreens();
    this.blockingInputs();
    this.changeBtns(resetBtn, startBtn); // показываю кнопку "ресет"б скрываю СТАРТ
    this.addServices();
    this.addPrices();
    // appData.logger();
    this.showResult();
  },

  // Метод  выводит результаты на экран
  showResult: function () {
    total.value = this.screenPrice
    totalCountOther.value = this.sevicePricesPercent + this.sevicePricesNumber
    fullTotalCount.value = this.fullPrice
    totalCountRollback.value = this.totalMinusRollback
    totalCount.value = this.totalScreens
  },

  // Метод заполняет свойсво  screens обьектами
  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    console.log('this1', this)

    screens.forEach((screen, index) => {

      let select = screen.querySelector('select');
      let input = screen.querySelector('input[type=text]');
      let selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      })
    });

    for (let screen of appData.screens) {
      if (screen.price == 0) {
        appData.isError = true
        alert('Заполните  тип и количество экранов')
      } else {
        appData.isError = false
      }
    }

    if (appData.isError == false) {
      appData.start()
    }
    // console.dir(appData) 
  },

  // метод блокирует  все инпуты и селекты с левой стороны  после нажатия кнопки старт
  blockingInputs: function () {
    elemsDisabled = document.querySelectorAll('.main-controls input[type=checkbox], .screen select[name="views-select"], .screen input[type="text"]')
    elemsDisabled.forEach(element => {
      element.setAttribute("disabled", "disabled");
    });
  },

  // blockingInputs: function () {
  //   // console.log(123)
  //   elemsDisabled.forEach(element => {
  //     element.setAttribute("disabled", "disabled");
  //   });
  // },

  changeBtns: function (show, hide) {
    hide.style.display = 'none'
    show.style.display = 'block'
    // console.log('output')
    show.addEventListener('click', appData.reset)
  },

  reset: function () {
    // screens = 0

    appData.changeBtns(startBtn, resetBtn)
    elemsDisabled.forEach(element => {
      element.removeAttribute("disabled");
    });

    while (appData.screens.length > 0) {
      appData.screens.pop();
    }

    console.log(appData.screens)
  },

  addPrices: function () {

    for (let screen of this.screens) {
      this.screenPrice += +screen.price
    }

    for (let key in this.servicesNumber) {
      this.sevicePricesNumber += this.servicesNumber[key]
    }

    for (let key in this.servicesPercent) {
      this.sevicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    // Считаю количество экранов
    for (let screen of this.screens) {
      this.totalScreens += +screen.count
    }

    this.fullPrice = +this.screenPrice + this.sevicePricesNumber + this.sevicePricesPercent

    this.totalMinusRollback = this.fullPrice - (this.fullPrice * (this.rollback / 100));
  },

  logger: function () {
    for (let key in appData) {
      console.log('свойство-' + key + " " + 'значение-' + appData[key]);
    }
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      let check = item.querySelector('input[type=checkbox]');
      let label = item.querySelector('label');
      let input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach((item) => {
      let check = item.querySelector('input[type=checkbox]');
      let label = item.querySelector('label');
      let input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    // console.log('клонированная нода', cloneScreen);
  },

  addTitle: function () {
    document.title = `${title.textContent} + 1`;
  }
}

appData.init();




