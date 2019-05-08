import './swiper.css';

export default class Swiper {
  // eslint-disable-next-line class-methods-use-this
  buildSwiper() {
    const swiper = document.querySelector('.swiper');
    const gallery = document.querySelector('.gallery');

    /* этот код помечает картинки, для удобства разработки */
    let list = document.querySelectorAll('.youtube-info-wrapper');
    for (let i = 0; i < list.length; i++) {
      list[i].style.position = 'relative';
      let span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      list[i].appendChild(span);
    }

    /* конфигурация */
    let width = 130; // ширина изображения
    let count = 3; // количество изображений

    let carousel = document.getElementById('carousel');
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function () {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function () {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
  }
}
