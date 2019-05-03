import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.state = {
      APIKEY: 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg',
      URL: `https://www.googleapis.com/youtube/v3/search?key=${this.APIKEY}&type=video&part=snippet&maxResults=15&q=${userRequest}`,
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipNames();
    const view = new AppView(data);

    view.render();
  }
}
