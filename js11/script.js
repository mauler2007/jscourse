"use strict"

const button = document.getElementById('btn'),
  range = document.getElementById('range'),
  textInput = document.getElementById('text'),
  square = document.getElementById('square'),
  circle = document.getElementById('circle'),
  e_btn = document.getElementById('e_btn');


button.addEventListener('click' , function() {
  square.style.backgroundColor = textInput.value;
  e_btn.style.display='none';
});

range.addEventListener('input', function() {
  // textInput.setAttribute('min' , 100);
  // textInput.setAttribute('max' , 100);

  // circle.style.width = textInput.value;
  console.log(textInput.value);
});

console.dir(circle);


