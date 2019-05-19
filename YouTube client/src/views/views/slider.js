import './slider-style.css';

export default class Slider {
  constructor() {
    this.eventHandlers = {};
    this.isSliderButtonsBuild = false;
    this.isSliderFunctionalBuild = false;
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
    if (this.isSliderButtonsBuild === true) return;
    this.isSliderButtonsBuild = true;
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
    if (this.isSliderFunctionalBuild === true) return;
    this.isSliderFunctionalBuild = true;
    const slider = document.querySelector('.gallery');
    const page = document.querySelector('.page');
    const sliderWrapper = document.querySelector('.wrapper');
    const gallery = document.querySelector('.gallery');
    const sliderControlBlock = document.querySelector('.slider-control');
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
    };
    const handleLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };
    const handleUp = () => {
      gallery.style.scrollBehavior = 'smooth';
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
      gallery.style.scrollBehavior = '';
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
    const handleLeaveTest = () => {
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
      slider.scrollLeft = currentPage * currentSliderWidth;
    };
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleLeaveTest);
    slider.addEventListener('touchmove', handleTouchMove);

    const nextButton = document.querySelector('.next-slider-button');
    const prevButton = document.querySelector('.prev-slider-button');

    const handleButtonNext = () => {
      const tooltipNext = document.querySelector('.tooltipNext');
      const currentTooltipValue = +tooltipNext.innerHTML;
      tooltipNext.innerHTML = currentTooltipValue + 1;
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
      const tooltipPrev = document.querySelector('.tooltipPrev');
      const currentTooltipValue = +tooltipPrev.innerHTML;
      if (currentTooltipValue !== 0) {
        tooltipPrev.innerHTML = currentTooltipValue - 1;
      }
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

    const buildNextButtonTooltip = () => {
      const nextPage = +page.innerHTML;
      const tooltipNext = document.createElement('div');
      tooltipNext.className = 'tooltipNext';
      tooltipNext.innerHTML = nextPage + 1;
      sliderControlBlock.appendChild(tooltipNext);
    };
    const removeNextButtonTooltip = () => {
      const tooltipNext = document.querySelector('.tooltipNext');
      sliderControlBlock.removeChild(tooltipNext);
    };

    const buildPrevButtonTooltip = () => {
      const prevPage = +page.innerHTML;
      const tooltipPrev = document.createElement('div');
      tooltipPrev.className = 'tooltipPrev';
      if (prevPage === 0) {
        tooltipPrev.innerHTML = 0;
        tooltipPrev.style.backgroundColor = '#b10b0b';
      } else {
        tooltipPrev.innerHTML = prevPage - 1;
      }
      sliderControlBlock.appendChild(tooltipPrev);
    };

    const removePrevButtonTooltip = () => {
      const tooltipPrev = document.querySelector('.tooltipPrev');
      sliderControlBlock.removeChild(tooltipPrev);
    };

    nextButton.addEventListener('mouseover', buildNextButtonTooltip);
    nextButton.addEventListener('mouseout', removeNextButtonTooltip);
    prevButton.addEventListener('mouseover', buildPrevButtonTooltip);
    prevButton.addEventListener('mouseout', removePrevButtonTooltip);
  }
}
