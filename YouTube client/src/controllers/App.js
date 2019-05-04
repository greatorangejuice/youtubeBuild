import AppView from '../views/views/AppView';
import GetData from '../models/GetData';
import InitialView from '../views/views/InitialView';


const APIKEY = 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg';
export default class App {
  constructor() {
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=15&q=js`,
    };
  }

  async start() {
    // const initialView = new InitialView();
    const model = new GetData(this.state);
    const data = await model.getClipNames();
    const view = new AppView(data);

    InitialView.getInitialDom();
    const startButton = document.querySelector('.search-button');
    const searchInputValue = document.querySelector('.search-field');
    // eslint-disable-next-line no-console
    console.log(searchInputValue);
    // eslint-disable-next-line no-console
    console.log(startButton);
    startButton.addEventListener('click', () => {
    // eslint-disable-next-line no-console
      console.log('Its will be work');
    });
    view.render();
  }
}
