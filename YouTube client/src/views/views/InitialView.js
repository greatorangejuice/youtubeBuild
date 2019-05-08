import './initial-view.css';

export default class InitialView {
  static getInitialDom() {
    const appContainer = document.createElement('div');
    appContainer.className = 'application';
    document.body.appendChild(appContainer);

    const wrapper = document.createElement('div');
    wrapper.className = 'search-field-wrapper';
    const searchField = document.createElement('input');
    searchField.value = 'Nature';
    searchField.className = 'search-field';
    const startButton = document.createElement('button');
    startButton.innerText = 'Search';
    startButton.className = 'search-button';
    appContainer.appendChild(wrapper);
    wrapper.appendChild(searchField);
    wrapper.appendChild(startButton);

    const dataWrapper = document.createElement('div');
    dataWrapper.className = 'videoData-container';
    appContainer.appendChild(dataWrapper);

    const sliderScriptLink = document.createElement('script');
    sliderScriptLink.type = 'text/javascript';
  }
}
