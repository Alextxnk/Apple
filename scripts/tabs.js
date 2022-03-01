"use strict";
const tabsFunc = () => {
   const tabs = document.querySelectorAll('.card-detail__change');
   const tabsTitle = document.querySelector('.card-details__title');
   const tabsPrice = document.querySelector('.card-details__price');
   const tabsImage = document.querySelector('.card__image_item');
   const tabsDescription = document.querySelector('.card-details__description-item.description__memory');

   const tabsOptions = [{
         name: "Graphite",
         memory: "128",
         price: 99990,
         image: 'img/iphone-13-pro-max-graphite-select.png'
      },
      {
         name: "Gold",
         memory: "256",
         price: 109990,
         image: 'img/iphone-13-pro-max-gold-select.png'
      },
      {
         name: "Silver",
         memory: "512",
         price: 129990,
         image: 'img/iphone-13-pro-max-silver-select.png'
      },
      {
         name: "Sierra Blue",
         memory: "1024",
         price: 149990,
         image: 'img/iphone-13-pro-max-blue-select.png'
      }
   ];

   const changeContent = (index) => {
      tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
      //обратные скобки называются интерполяцией туда можно вставлять JS код
      tabsPrice.textContent = `${tabsOptions[index].price}₽`;

      tabsImage.setAttribute('src', tabsOptions[index].image);
      tabsDescription.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory} ГБ`;
   };

   const changeActiveTabs = (indexClickedTab) => {
      tabs.forEach((tab, index) => {
         tab.classList.remove('active');

         if (index === indexClickedTab) {
            tab.classList.add('active');
         }
      });

      changeContent(indexClickedTab);
   };

   tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
         changeActiveTabs(index);
      });
   });

   changeContent(0); //используем первый элемнет массива (выводим дефолтные данные)
};

tabsFunc();