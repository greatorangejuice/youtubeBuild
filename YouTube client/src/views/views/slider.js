import './slider-style.css';

export default class Slider {
  // eslint-disable-next-line class-methods-use-this
  buildSliderButtons() {
    const mainContainer = document.querySelector('.main-container');
    const buttonPrev = document.createElement('button');
    buttonPrev.innerHTML = '⇦';
    buttonPrev.className = 'prev';
    mainContainer.appendChild(buttonPrev);

    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '⇨';
    buttonNext.className = 'next';
    mainContainer.appendChild(buttonNext);
  }

  // eslint-disable-next-line class-methods-use-this
  buildSlider() {
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
      // console.log(e);
      // console.log('PageX: ', e.pageX);
      // console.log('Slider offsetLeft: ', slider.offsetLeft);
      // console.log(slider);
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
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const gallery = document.querySelector('.gallery');
    // let countNext = 0;
    // let countPrev = 0;
    nextButton.addEventListener('click', () => {
      gallery.scrollBy(1148, 0);
    });

    prevButton.addEventListener('click', () => {
      gallery.scrollBy(-1148, 0);
    });
  }
}
