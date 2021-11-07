"use strict"

// Восстановить порядок книг.
const parentOfBooks = document.querySelector('.books');
const books = document.querySelectorAll('.book');

// Исправить заголовок
const cloneElem = books[4].cloneNode(true);

//  Восстановить порядок глав во второй и пятой книге
const chapters = document.querySelectorAll('li');
const chaptersParent = document.querySelectorAll('ul');

console.log(chapters);
// console.log(chaptersParent);

// Восстановить порядок книг.
parentOfBooks.prepend(books[1]);
parentOfBooks.append(books[2]);
books[3].before(books[4]);

// Заменить картинку заднего фона на другую
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Удалить рекламу со страницы
document.querySelector('.adv').remove();

// Исправить заголовок
cloneElem.innerHTML = '<h2><a href = "https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"target = "_blank"> Книга 3. this и Прототипы Объектов </a></h2><ul><li> Введение </li><li> Предисловие </li><li> Глава 1: <em> this </em> Or That?</li><li> Глава 2: <em> this </em> теперь приобретает смысл!</li><li> Глава 3: Объекты </li><li> Глава 4: Смешивая объекты "классов" </li><li> Глава 5: Прототипы </li><li> Глава 6: Делегирование поведения </li><li> Приложение A: ES6 <em> классы </em></li><li> Приложение B: Благодарности! </li></ul>';
books[4].replaceWith(cloneElem);

// Восстановить порядок глав во второй 

chapters[10].before(chapters[2]);
chapters[3].after(chapters[6]);
chapters[6].after(chapters[8]);

// и пятой книге
chapters[47].after(chapters[55]);
chapters[55].after(chapters[49]);
chapters[49].after(chapters[50]);
chapters[53].after(chapters[51]);

// в шестой книге добавить главу“ Глава 8: За пределами ES6”
let liLast = document.createElement('li');
liLast.innerHTML = 'Глава 8: За пределами ES6';
chaptersParent[2].append(liLast);
liLast.after(chapters[56]);

// console.log('output', chapters[55]);

console.dir(chaptersParent[2]);