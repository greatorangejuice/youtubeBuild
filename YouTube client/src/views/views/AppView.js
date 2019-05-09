import './app-view.css';
// import './swiper.css';
// import Swiper from './swiper';
import Carousel from './gallery-carousel';

export default class AppView {
  deletePreviousData() {
    console.log(this.snippets);
    const wrapper = document.querySelector('videoData-container');
    document.body.removeChild(wrapper);
  }

  render(array) {
    console.log(this.snippets);
    const mainContainer = document.querySelector('.main-container');
    const buttonPrev = document.createElement('button');
    buttonPrev.innerHTML = '⇦';
    buttonPrev.className = 'prev';
    mainContainer.appendChild(buttonPrev);

    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '⇨';
    buttonNext.className = 'next';
    mainContainer.appendChild(buttonNext);
    const wrapper = document.querySelector('.gallery');
    array.forEach((data) => {
      const { title, channelTitle, description } = data.snippet;
      const { publishedAt } = data.snippet;
      const { url } = data.snippet.thumbnails.medium;

      const dataBlock = document.createElement('div');
      dataBlock.className = 'youtube-info-wrapper';
      wrapper.appendChild(dataBlock);

      const titleContainer = document.createElement('div');
      titleContainer.className = 'video-title';
      dataBlock.appendChild(titleContainer);
      const titleField = document.createElement('p');
      const channelName = document.createElement('p');
      const descriptionField = document.createElement('p');
      const publishTime = document.createElement('p');
      const previewImage = document.createElement('img');

      previewImage.src = url;
      titleField.innerText = title;
      channelName.innerText = channelTitle;
      descriptionField.innerText = description;
      publishTime.innerText = publishedAt.slice(0, 10);
      dataBlock.appendChild(previewImage);
      titleContainer.appendChild(titleField);
      dataBlock.appendChild(channelName);
      dataBlock.appendChild(descriptionField);
      dataBlock.appendChild(publishTime);
      // И так со всеми элементами.


      // const swiper = new Swiper();
      // swiper.buildSwiper();

      const carousel = new Carousel();
      carousel.buildCarousel();
    });
  }
}
