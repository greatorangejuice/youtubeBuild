import AppView from '../views/views/AppView';
// import GetData from '../models/GetData';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';
// import AppView from '../views/views/AppView';

export default class App {
  constructor() {
    this.state = {
      APIKEY: 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg',
    };
  }

  async start() {
    InitialView.getInitialDom();
    const model = new GetData(this.state);
    const startButton = document.querySelector('.search-button');
    const view = new AppView();
    startButton.addEventListener('click', async () => {
      view.render(await model.getAllData());
    });

    // const view = new AppView(test);
    // Обязательно VIEW юзать в App.js? Или можно отправить его запуск в model?
    // const model = new GetData(this.state);
    // const data = await model.getClipNames();
    // eslint-disable-next-line no-console
    // const searchInputValue = document.querySelector('.search-field');
  }
}
