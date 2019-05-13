import AppView from '../views/views/AppView';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';
import Slider from '../views/views/slider';

export default class App {
  constructor() {
    this.state = {
      APIKEY: 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg',
      nextToken: null,
    };
  }

  async start() {
    let { nextToken } = this.state;
    InitialView.getInitialDom();
    const model = new GetData(this.state);
    const startButton = document.querySelector('.search-button');
    const view = new AppView();
    const slider = new Slider();
    // const { data, token } = await model.getAllData
    startButton.addEventListener('click', async () => {
    // eslint-disable-next-line no-unused-vars
      const { data, token } = await model.getAllData(); // Сделать проверку внутри на токен.
      console.log('Needed TOKEN: ', token);
      console.log(nextToken);
      nextToken = token;
      console.log('Changed token: ', nextToken);
      this.state.nextToken = token;
      console.log('Token in state: ', this.state.nextToken);
      // this.nextToken = 'TEST!!!';
      view.render(data);
      slider.buildSliderButtons();
      slider.buildSlider();
      // slider.observe(await model.getAllData(token));
    });
    // eslint-disable-next-line no-unused-vars
    slider.addEventListener('meetRightWall', await model.getAllData.bind(model));
    // Хранить токен в КОНСТРУКТОРЕ!
  }
}
