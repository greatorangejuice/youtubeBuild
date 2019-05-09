import './carousel.css';


export default class Carousel {
  // eslint-disable-next-line class-methods-use-this
  buildCarousel() {
    /* этот код помечает картинки, для удобства разработки */
    const lis = document.querySelectorAll('.youtube-info-wrapper');
    for (let i = 0; i < lis.length; i += 1) {
      lis[i].style.position = 'relative';
      const span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    const width = 270; // ширина изображения
    const count = 4; // количество изображений

    const carousel = document.querySelector('.main-container');
    const list = carousel.querySelector('.gallery');
    const listElems = carousel.querySelectorAll('.youtube-info-wrapper');

    let position = 0; // текущий сдвиг влево

    // eslint-disable-next-line func-names
    carousel.querySelector('.prev').onclick = function () {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0);
      list.style.marginLeft = `${position}px`;
    };

    // eslint-disable-next-line func-names
    carousel.querySelector('.next').onclick = function () {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = `${position}px`;
    };
  }
}
