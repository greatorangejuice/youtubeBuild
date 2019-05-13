import AppView from '../views/views/AppView';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';
import Slider from '../views/views/slider';

export default class App {
  constructor() {
    this.state = {
      APIKEY: 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg',
    };
  }

  async start() {
    // let { nextToken } = this.state;
    InitialView.getInitialDom();
    const model = new GetData(this.state);
    const startButton = document.querySelector('.search-button');
    const view = new AppView();
    const slider = new Slider();
    startButton.addEventListener('click', async () => {
    // eslint-disable-next-line no-unused-vars
      const { data } = await model.getAllData();
      view.render(data);
      slider.buildSliderButtons();
      slider.buildSlider();
    });
    // eslint-disable-next-line no-unused-vars
    slider.addEventListener('meetRightWall', async () => {
      const { data } = await model.getAllData();
      view.render(data);
    });
    // Поменять return и просто запускать рендер
  }
}
