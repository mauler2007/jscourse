'use strict'

let isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

// Принимаю параметр  который буду использовать в дочерней функции
function start(num) {
  
  let answer = num;

  function compare() {

    let question = prompt('Угадай число от 1 до 100', '10');

    if (question === null) {
      alert('Игра окончена');
      return;
    } else if (answer < question) {
      alert('Загаданное число меньше');
      compare();
    } else if (answer > question) {
      alert('Загаданное число больше');
      compare();
    } else if (answer == question) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (!isNumber(question)) {
      alert('Введи число!');
      compare();
    } else {
      alert('Введи число!');
      compare();
    }
  }
  compare();
}

start(10);