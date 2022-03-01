"use strict";
const accordeon = () => {
   const chItems = document.querySelectorAll('.characteristics__item');

   chItems.forEach((item) => {
      const chButton = item.querySelector('.characteristics__title'); //кнопка
      const chContent = item.querySelector('.characteristics__description'); //скрытый блок

      chButton.addEventListener('click', () => {
         if (chContent.classList.contains('open')) {
            chContent.style.height = '';
         } else {
            chContent.style.height = chContent.scrollHeight + 'px';
         }
         chButton.classList.toggle('active');
         chContent.classList.toggle('open'); // проеряет закрыт или открыт класс и работает в две стороны (закрыть/открыть аккордеон), вместо remove и add
      });
   });
};

accordeon();