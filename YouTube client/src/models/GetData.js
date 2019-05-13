export default class GetData {
  // constructor() {
  //   this.APIKEY = 'AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg';
  // }
  constructor(state) {
    this.state = state;
    this.testToken = null;
  }

  async getAllData() {
    console.log(this);
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    let url = '';
    if (this.testToken == null) {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=8&q=${inputField}`;
      console.log('start with first URL');
    } else {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=8&q=${inputField}&pageToken=${this.testToken}`;
      console.log('TEST TOKEN');
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const snippets = data.items.map(snippet => snippet);
    const { nextPageToken } = data;
    console.log('NEXTPAGETOKEN: ', nextPageToken);
    this.testToken = nextPageToken;

    console.log(snippets);
    const videosID = [];
    snippets.forEach((item) => {
      const { videoId } = item.id;
      videosID.push(videoId);
    });
    const ID = videosID.join();
    console.log('VIDEOS ID: ', ID);
    const statisticURL = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${ID}&part=snippet,statistics`;
    const secondResponse = await fetch(statisticURL);
    const statistics = await secondResponse.json();
    console.log(statistics);
    const views = statistics.items.map(countView => countView.statistics.viewCount);
    console.log('VIEWS arr: ', views);
    // Массив есть. Я же могу просто запилить его циклом в объект
    for (let i = 0; i < snippets.length; i += 1) {
      snippets[i].views = views[i];
    }
    console.log('NEW DATA: ', snippets);
    const result = [snippets, views];
    console.log('RESULT: ', result);
    // Пройтись циклом и Object.Assign!
    // А
    return { data: snippets, token: nextPageToken };
  }

  // async getNextPage(token) {
  //   const { APIKEY } = this.state;
  //   const inputField = document.querySelector('.search-field').value;
  //   const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&pageToken=${token}&maxResults=7&q=${inputField}`;
  // }
}
