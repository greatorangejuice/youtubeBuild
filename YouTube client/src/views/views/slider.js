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

  // alignGallery() {
  //   const slider = document.querySelector('.gallery');
  //   if
  // }

  // eslint-disable-next-line class-methods-use-this
  buildSliderButtons() {
    const mainContainer = document.querySelector('.main-container');

    const sliderControlBlock = document.createElement('div');
    sliderControlBlock.className = 'slider-control';
    mainContainer.appendChild(sliderControlBlock);

    const buttonPrev = document.createElement('button');
    buttonPrev.innerHTML = '⇦';
    buttonPrev.className = 'prev-slider-button';
    sliderControlBlock.appendChild(buttonPrev);

    const pageIdent = document.createElement('span');
    pageIdent.setAttribute('page', 0);
    pageIdent.className = 'page';
    pageIdent.id = 'page';
    pageIdent.innerText = '0';
    sliderControlBlock.appendChild(pageIdent);

    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '⇨';
    buttonNext.className = 'next-slider-button';
    sliderControlBlock.appendChild(buttonNext);
  }

  // eslint-disable-next-line class-methods-use-this
  async buildSlider() {
    const slider = document.querySelector('.gallery');
    const page = document.querySelector('.page');
    const sliderWrapper = document.querySelector('.wrapper');
    const gallery = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;
    let walk;
    const handleDown = (e) => {
      this.observe();
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
      console.log('scrollLeft ', slider.scrollLeft);
    };
    const handleLeave = () => {
      isDown = false;
      slider.classList.remove('active');

      // if (slider.scrollLeft)
      // if (!walk % 273 === 0) {
      //   console.log('align');
      //   slider.scrollLeft -= 100;
      // }
      // walk = 0;
    };
    const handleUp = () => {
      const currentSliderWidth = sliderWrapper.offsetWidth;
      isDown = false;
      slider.classList.remove('active');
      let currentPage = +page.innerHTML;
      if (walk < 0) {
        currentPage += 1;
        page.innerHTML = currentPage;
      } else if (walk > 0) {
        currentPage -= 1;
        if (currentPage < 0) {
          currentPage = 0;
        }
        page.innerHTML = currentPage;
      }
      gallery.scrollLeft = currentPage * currentSliderWidth;
    };

    const handleMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
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
      walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleLeave);
    slider.addEventListener('touchmove', handleTouchMove);

    const nextButton = document.querySelector('.next-slider-button');
    const prevButton = document.querySelector('.prev-slider-button');
    /*
    sliderWrapper using below, because it class set the slider width.
    You can call only slider, if your slider don't have wrapper.
    */
    const handleButtonNext = () => {
      const currentSliderWidth = sliderWrapper.offsetWidth;
      let currentPage = +page.innerHTML;
      currentPage += 1;
      if (currentPage < 0) {
        currentPage = 0;
      }
      page.innerHTML = currentPage;
      gallery.scrollLeft = currentPage * currentSliderWidth;
      this.observe();
    };
    const handleButtonPrev = () => {
      const currentSliderWidth = sliderWrapper.offsetWidth;
      let currentPage = +page.innerHTML;
      currentPage -= 1;
      if (currentPage < 0) {
        currentPage = 0;
      }
      page.innerHTML = currentPage;
      gallery.scrollLeft = currentPage * currentSliderWidth;
    };
    nextButton.addEventListener('click', handleButtonNext);
    prevButton.addEventListener('click', handleButtonPrev);
  }
}

// Передлать свайпы! За один мах перелистывать сразу по 4 слайда и всё.
