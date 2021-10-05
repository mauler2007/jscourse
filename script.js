'use strict'

let title= 'projectName',
  screens= 'easy,  hard,  interactive',
  screenPrice= 1000,
  rollback= 100,
  fullPrice= 5000,
  adaptive= true;

console.log('тип данных: ' + typeof(title));
console.log('тип данных: ' + typeof(fullPrice));
console.log('тип данных: ' + typeof(adaptive));

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');

console.log('Стоимость разработки сайта ' + fullPrice+  ' рублей');

let newArr = screens.toLowerCase().split(', ');
console.log(newArr);

console.log('Процент отката посреднику за работу: ' + (fullPrice * (rollback / 100)));