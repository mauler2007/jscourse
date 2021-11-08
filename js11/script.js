"use strict"

const button = document.getElementById('btn'),
  range = document.getElementById('range'),
  textInput = document.getElementById('text'),
  square = document.getElementById('square'),
  circle = document.getElementById('circle'),
  e_btn = document.getElementById('e_btn');


button.addEventListener('click', function () {
  square.style.backgroundColor = textInput.value;
  e_btn.style.display = 'none';
});

// const logger = function (event) {
//   console.log(event.target.value);
// };

const log = function (event) {
  let val = event.target.value;
  circle.style.width = `${val}%`,
    circle.style.height = `${val}%`;
  console.log(val);
};

range.addEventListener('input', log);


// range.addEventListener('change', log);
// range.addEventListener('focus', logger);
// range.addEventListener('blur', logger);

// textInput.setAttribute('min', 100);
// textInput.setAttribute('max', 100);

// circle.style.width = changeWidth;
// console.log(textInput.value);


// console.dir(circle);