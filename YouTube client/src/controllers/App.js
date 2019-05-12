import AppView from '../views/views/AppView';
// import GetData from '../models/GetData';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';
import Slider from '../views/views/slider';
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
    const slider = new Slider();
    // eslint-disable-next-line no-unused-vars
    const { data, token } = await model.getAllData();
    startButton.addEventListener('click', async () => {
      view.render(data);
      slider.buildSliderButtons();
      slider.buildSlider();
    });

    // Как избавиться во View от конструктора?
    // Как удалить отрисованный DOM?
  }
}
