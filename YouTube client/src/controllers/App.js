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

    // Как избавиться во View от конструктора?
    // Как удалить отрисованный DOM?
    // По идее нужно перенести создание враппера в InitialView, чтобы он
    // растягивался в ширину, а не вниз.
  }
}
