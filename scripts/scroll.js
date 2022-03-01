"use strict";
const scrollFunc = () => {
   const links = document.querySelectorAll(".header-menu__item a");
   const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

   const newArray = [...links, linkCharacteristics];

   seamless.polyfill();

   newArray.forEach((element) => { //стрелочная или лямбда функция, работает быстрее обычной
      element.addEventListener('click', (event) => { //обработчик события 
         event.preventDefault();

         const id = element.getAttribute('href').substring(1);
         const section = document.getElementById(id);
         //console.log(section);

         if (section) {
            seamless.elementScrollIntoView(section, {
               behavior: 'smooth',
               block: 'start'
            });
         } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
               behavior: "smooth",
               block: "center",
               inline: "center",
            });
         }
      });
   });
};

scrollFunc(); //когда поместили весь код в функцию, мы сделали замыкание и область видимости у констант только внутри этой функции, такой подход называется инкапсуляция (мы защитили один участок кода от другого участка кода)