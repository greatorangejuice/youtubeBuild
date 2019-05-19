import './app-view.css';

export default class AppView {
  // eslint-disable-next-line class-methods-use-this
  clearPreviousInfo() {
    // const searchPreviousValue = document.querySelector('.search-field').value;
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
  }

  // eslint-disable-next-line class-methods-use-this
  setFirstPage() {
    const page = document.querySelector('.page');
    page.innerHTML = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  render(array) {
    const wrapper = document.querySelector('.gallery');
    array.forEach((data) => {
      const { title, channelTitle, description } = data.snippet;
      const { publishedAt } = data.snippet;
      const { url } = data.snippet.thumbnails.medium;
      const { videoId } = data.id;
      const { views } = data;

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

      const viewsField = document.createElement('p');
      viewsField.className = 'count-views';
      viewsField.innerText = views;
      parentBlock.appendChild(viewsField);
    });
  }
}
