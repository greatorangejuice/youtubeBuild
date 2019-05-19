import AppView from '../views/views/AppView';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';
import Slider from '../views/views/slider';

export default class App {
  constructor() {
    this.state = {
      // APIKEY: 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg',
      APIKEY: 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y',
    };
  }

  async start() {
    InitialView.getInitialDom();
    const model = new GetData(this.state);
    const startButton = document.querySelector('.search-button');
    const view = new AppView();
    const slider = new Slider();
    // for add one more event, like a key, I need singletone, I think.
    startButton.addEventListener('click', async () => {
      view.clearPreviousInfo();
      const { data } = await model.getAllData();
      view.render(data);
      slider.buildSliderButtons();
      slider.buildSlider();
      view.setFirstPage();
    });
    // eslint-disable-next-line no-unused-vars
    slider.addEventListener('meetRightWall', async () => {
      const { data } = await model.getAllData();
      view.render(data);
    });
    window.addEventListener('resize', slider.changePageAfterResize);
  }
}
