export default class AppView {
  constructor(snippets) {
    this.snippets = snippets;
  }


  render() {
    const content = document.createElement('ul');
    content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');
    document.body.appendChild(content);
  }

  func() {
    this.snippets.forEach(data => { // Приходит массив объектов. Проходим, деструктурируем.
      // записываем в DOM.
      let {title, decription, publishedAt} = data.snippet;
      const titleField = document.createElement('p');
      titleField.innerHTML = title;
      // И так со всеми элементами.
    });
  }
}
// Нужно запилить 15 блоков DOM, в каждый запихнуть всю нужную инфу, а уже потом пилить слайдер
// Осталось придумать, как это правильно мапами обработать.
// Придёт массив с объектами. А потом буду парсить.
