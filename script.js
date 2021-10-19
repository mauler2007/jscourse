
let answer = 10;

let isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
}

function gameStart() {

  let question = prompt('Угадай число от 1 до 100', '10');
  
  if (question === null) {
    alert('Игра окончена');
    return;
  } else if (answer < question) {
    alert('Загаданное число меньше');
    gameStart();
  } else if (answer > question) {
    alert('Загаданное число больше');
    gameStart();
  } else if (answer == question) {
    alert('Поздравляю, Вы угадали!!!');
    return;
  } else if (!isNumber(question)) {
    alert('Введи число!');
    gameStart();
  } else {
    alert('Введи число!');
    gameStart();
  }
}

gameStart();