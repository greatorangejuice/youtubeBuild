// import AppView from '../views/views/AppView';
// import GetData from '../models/GetData';
import InitialView from '../views/views/InitialView';
import GetData from '../models/GetData';

const APIKEY = 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg';
export default class App {
  constructor() {
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=15&q=js`,
    };
  }

  async start() {
    InitialView.getInitialDom();
    const model = new GetData(this.state);
    const startButton = document.querySelector('.search-button');

    startButton.addEventListener('click', () => {
      model.getAllData();
    });

    // const model = new GetData(this.state);
    // const data = await model.getClipNames();
    // const view = new AppView(data);
    // eslint-disable-next-line no-console
    console.log(this.state.url);
    // const searchInputValue = document.querySelector('.search-field');

    // view.render();
  }
}
