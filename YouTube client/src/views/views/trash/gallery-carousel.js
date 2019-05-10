
export default class Carousel {
  // eslint-disable-next-line class-methods-use-this
  buildCarousel() {
    const lis = document.querySelectorAll('.youtube-info-wrapper');
    for (let i = 0; i < lis.length; i += 1) {
      lis[i].style.position = 'relative';
      const span = document.createElement('span');
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    const width = 300;
    const count = 4;

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

  // eslint-disable-next-line class-methods-use-this
  buildSwiper() {
    const slider = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }
}
