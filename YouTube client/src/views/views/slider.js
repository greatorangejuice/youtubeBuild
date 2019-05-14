import './slider-style.css';

export default class Slider {
  constructor() {
    this.eventHandlers = {};
  }

  addEventListener(eventName, handler) {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
  }

  fire(eventName) {
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((handler) => {
        handler();
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  observe() {
    const slider = document.querySelector('.gallery');
    if (slider.scrollWidth - slider.scrollLeft < window.innerWidth) {
      this.fire('meetRightWall');
    }
  }

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
  async buildSlider() {
    const slider = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;
    const handleDown = (e) => {
      this.observe();
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    };
    const handleLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };
    const handleUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };
    const handleMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
      console.log('PageX MOVE: ', e.pageX);
      console.log('Slider offsetLeft MOVE: ', slider.offsetLeft);
      console.log(window.innerWidth);
    };
    slider.addEventListener('mousedown', handleDown);
    slider.addEventListener('mouseleave', handleLeave);
    slider.addEventListener('mouseup', handleUp);
    slider.addEventListener('mousemove', handleMove);

    const handleTouchStart = (e) => {
      this.observe();
      isDown = true;
      slider.classList.add('active');
      startX = e.changedTouches[0].pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    };
    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.changedTouches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleLeave);
    slider.addEventListener('touchmove', handleTouchMove);

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const gallery = document.querySelector('.gallery');

    /*
    sliderWrapper using below, because it class set the slider width.
    You can call only slider, if your slider don't have wrapper.
    */
    const sliderWrapper = document.querySelector('.wrapper');
    const handleButtonNext = () => {
      this.observe();
      const currentSliderWidth = sliderWrapper.offsetWidth;
      gallery.scrollBy(currentSliderWidth, 0);
      console.log(currentSliderWidth);
    };
    const handleButtonPrev = () => {
      const currentSliderWidth = sliderWrapper.offsetWidth;
      gallery.scrollBy(-currentSliderWidth, 0);
      console.log(currentSliderWidth);
    };
    nextButton.addEventListener('click', handleButtonNext);
    prevButton.addEventListener('click', handleButtonPrev);
  }
}
