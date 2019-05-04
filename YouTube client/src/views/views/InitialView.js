export default class InitialView {
  static getInitialDom() {
    const searchField = document.createElement('input');
    searchField.value = 'I love RSS';
    const startButton = document.createElement('button');
    startButton.innerText = 'Search';
    document.body.appendChild(searchField);
    document.body.appendChild(startButton);
  }
}
