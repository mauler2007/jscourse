// let a = [1, 2, 3]

// a[10] = 'dfs'

// console.log(a);

// let obj = {
//   'name': 'Alex',
//   'age': 18,
//   'isStudent': false
// }

// ==перебор оббектов фор ин==
// for(let key in obj) {
//   console.log('ключ ' + key + ' ' + 'Значение ' + obj[key]);
// }

// console.log(Object.keys(obj));



// ==перебор массива фор оф==
// let arr = [11, 22, 33, 44, 55]

// получить только ключ 
// for(let key in arr) {
//   console.log(key);
// }

// получить только  значение через ключ  если к массиву применить  метод переберо  ФОР ИН  то кей начнет возращать индекс массива.Для перебора массива применяеться фор оф он более пригодній для єтого

// for(let key of arr) {
//   console.log(arr[key]);
// }

const books = [
  { id:0, name:'Дорога домой', author:'Виталий Зіков', price:1200},
  { id:1, name:'Война за выживание', author:'Виталий Зіков', price:1500},
  { id:2, name:'Мир безчисленных островов', author:'Виталий Зіков', price:1300},
  { id:3, name:'Далекая страна', author:'Алекс Кош', price:1200},
  { id:4, name:'Адреналин', author:'Алекс Ко', price:1000}
]

// Добавление удаление єлементов

// ========forEach========
// books.forEach(function(item) {
// console.log(item.price+ ' rubley');
//   item.price = item.price + ' rubley'
// })

// console.log(books);


// ========MAP========
// const newArr = books.map(function(item) {
//   item.price = item.price + 'rub'
//   return item;
// })

// console.log(newArr);

// ========MAP========
// const newArr = books.map(function (item) {
//  const newObj = {
//    id: item.id,
//    author: item.author
//  }
//  return newObj;
// })

// console.log(newArr);

// ========FILTER========  фильтрует элементы массива , должна быть проверка
// const newArr = books.filter(function(item) {
//   return item.author === 'Виталий Зіков'
// })
// console.log(newArr);


// ========REDUCE========  

// const  result = books.reduce(function(sum,item) {
//   return sum + item.price
// },0)
// console.log(result);

// ========REDUCE RIGHT========  

const  result = books.reduceRight(function(sum,item) {
  return sum + item.price
},0)
console.log(result);


