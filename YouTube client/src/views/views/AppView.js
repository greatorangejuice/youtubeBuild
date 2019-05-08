import './app-view.css';

export default class AppView {
  // constructor(snippets) {
  //   this.snippets = snippets;
  //   console.log(snippets);
  // }
  // static convertToHumanDate(date) {

  // }

  deletePreviousData() {
    console.log(this.snippets);
    const wrapper = document.querySelector('videoData-container');
    document.body.removeChild(wrapper);
  }

  render(array) {
    console.log(this.snippets);
    const wrapper = document.querySelector('.videoData-container');
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
    });
  }
}
// Нужно запилить 15 блоков DOM, в каждый запихнуть всю нужную инфу, а уже потом пилить слайдер
// Осталось придумать, как это правильно мапами обработать.
// Придёт массив с объектами. А потом буду парсить.
