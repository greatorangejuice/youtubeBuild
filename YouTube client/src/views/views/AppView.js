import './app-view.css';
// import Slider from './slider';


export default class AppView {
  render(array) {
    console.log(this.snippets);
    const wrapper = document.querySelector('.gallery');
    // const slider = new Slider();
    // slider.buildSliderButtons();
    // slider.buildSlider();
    array[0].forEach((data) => {
      const { title, channelTitle, description } = data.snippet;
      const { publishedAt } = data.snippet;
      const { url } = data.snippet.thumbnails.medium;
      const { videoId } = data.id;

      const parentBlock = document.createElement('div');
      parentBlock.className = 'youtube-item';
      wrapper.appendChild(parentBlock);

      const titleContainer = document.createElement('div');
      titleContainer.className = 'video-title';
      parentBlock.appendChild(titleContainer);

      const previewImage = document.createElement('img');
      previewImage.src = url;
      parentBlock.appendChild(previewImage);

      const titleField = document.createElement('a');
      titleField.href = `https://www.youtube.com/watch?v=${videoId}`;
      titleField.target = '_blank';
      titleField.innerText = title;
      titleContainer.appendChild(titleField);

      const channelName = document.createElement('p');
      channelName.innerText = channelTitle;
      parentBlock.appendChild(channelName);

      const descriptionField = document.createElement('p');
      descriptionField.innerText = description;
      parentBlock.appendChild(descriptionField);

      const publishTime = document.createElement('p');
      publishTime.innerText = publishedAt.slice(0, 10);
      parentBlock.appendChild(publishTime);

      const views = document.createElement('p');
      views.className = 'count-views';
      parentBlock.appendChild(views);

      // inner array = [ [snippets], [views] ];
      const statistic = array[1];
      AppView.getViews(statistic);
    });
  }

  static getViews(statistic) {
    const views = document.querySelectorAll('.count-views');
    const fieldForViews = Array.from(views);
    for (let i = 0; i < fieldForViews.length; i += 1) {
      fieldForViews[i].innerHTML = statistic[i];
    }
  }

  // static unRender() {
  //   console.log('unRend me please!!!');
  //   const parent = document.querySelector('.gallery');
  //   const childes = document.querySelector('.youtube-item');
  //   parent.removeChild(childes);
  // }
}
