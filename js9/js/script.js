'use strict'
// Получить заголовок "Калькулятор верстки" через метод getElementsByTagName
const listOfTitles = document.getElementsByTagName('h1');
let title = listOfTitles[0];
console.log('заголовок',title);

// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. HTMLCollection
let buttons = document.getElementsByClassName('handler_btn');
console.log('кнопки', buttons);

// Получить кнопку "+" под выпадающим списком через метод querySelector.
const addScreenTypesBtn = document.querySelector('button.screen-btn');
console.log('кнопкa "+"', addScreenTypesBtn);

// Получить все элементы с классом other - items в две разные переменные.
let otherPercentItems = document.querySelectorAll('.other-items.percent')
console.log('other-items + percent', otherPercentItems);

let otherNumberItems = document.querySelectorAll('.other-items.number')
console.log('other-items + number', otherNumberItems);


// Получить input type = range через его родителя с классом rollback
const rangeInput = document.querySelector('.rollback [type="range"]')
console.log('input type=range', rangeInput);

// Получить span с классом range - value через его родителя с классом rollback
const rangeValue = document.querySelector('.rollback span')
console.log('span с классом range-value', rangeValue);

// Получить все инпуты с классом total - input справа 
// получить именно элементы
// const totalInputs = document.querySelectorAll('.total-input');  
const totalInputs = document.getElementsByClassName('total-input');
console.log('все инпуты с классом total - input', totalInputs);

for (let i = 0; i < totalInputs.length; i++ ) {
  console.log(totalInputs[i]);
}

// Получить все блоки с классом screen в изменяемую переменную
let screenBlocks = document.querySelectorAll('.screen');
console.log('Bсе блоки с классом screen', screenBlocks);

// totalInputs.forEach(function (item, index, totalInputs) {
//   console.log(item);
// });


// for (item in totalInputs) {
//   console.log(item);
// }
// var newDiv = document.createElement('div');
// newDiv.className = 'total-input'
// totalInputs.appendChild(newDiv)
// console.log('длинна  коллекции', totalInputs);


// totalInputs.forEach(function(item) {
//   console.log('input', item);
// });


