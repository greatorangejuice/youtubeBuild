import './app-view.css';
import Slider from './slider';


export default class AppView {
  render(array) {
    console.log(this.snippets);
    const wrapper = document.querySelector('.gallery');
    const slider = new Slider();
    slider.buildSliderButtons();
    slider.buildSlider();
    array[0].forEach((data) => {
      const { title, channelTitle, description } = data.snippet;
      const { publishedAt } = data.snippet;
      const { url } = data.snippet.thumbnails.medium;
      const dataBlock = document.createElement('div');
      dataBlock.className = 'youtube-item';
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

      const views = document.createElement('p');
      views.className = 'count-views';
      dataBlock.appendChild(views);
      const stat = array[1];
      AppView.getViews(stat);
      // И так со всеми элементами.
    });
  }

  static getViews(stat) {
    const views = document.querySelectorAll('.count-views');
    const test = Array.from(views);
    for (let i = 0; i < test.length; i += 1) {
      test[i].innerHTML = stat[i];
    }
  }

  // static unRender() {
  //   console.log('unRend me please!!!');
  //   const parent = document.querySelector('.gallery');
  //   const childes = document.querySelector('.youtube-item');
  //   parent.removeChild(childes);
  // }
}
