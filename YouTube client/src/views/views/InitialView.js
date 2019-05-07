import './initial-view.css';

export default class InitialView {
  static getInitialDom() {
    const wrapper = document.createElement('div');
    wrapper.className = 'search-field-wrapper';
    const searchField = document.createElement('input');
    searchField.value = 'I love RSS';
    searchField.className = 'search-field';
    const startButton = document.createElement('button');
    startButton.innerText = 'Search';
    startButton.className = 'search-button';
    document.body.appendChild(wrapper);
    wrapper.appendChild(searchField);
    wrapper.appendChild(startButton);
  }
}
