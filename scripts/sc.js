"use strict";
//const link = document.querySelector(".header-menu__item a"); //добираемся до ссылки а

const links = document.querySelectorAll(".header-menu__item a");
//const array = [1, 2, 3, 4, 5];
// links.forEach(function (element, index, array) {
//    console.log(element);
// });

links.forEach((element) => { //стрелочная или лямбда функция, работает быстрее обычной
   element.onclick = () => {
      console.log('click');
   };
});

fetch('https://jsonplaceholder.typicode.com/todos')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
   });

// обычный for и forEach8
// for (let i = 0; i < array.length; i++) {
//    console.log(array[i]);
// }

//callback function 
// () => {}


// array.forEach((elem) => {
//    console.log(elem);
// });