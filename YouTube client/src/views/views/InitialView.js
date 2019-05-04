export default class InitialView {
  static getInitialDom() {
    const searchField = document.createElement('input');
    searchField.value = 'I love RSS';
    document.body.appendChild(searchField);
  }
}
