export default class GetData {
  constructor(state) {
    this.state = state;
  }

  async getAllData() {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=2&q=${inputField}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const snippets = data.items.map(snippet => snippet);
    // const { nextPageToken } = snippets;//ТОКЕН

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

    const result = [snippets, views];
    console.log('RESULT: ', result);
    // Пройтись циклом и Object.Assign!
    // А
    return result;
  }

  // async getNextPage(token) {
  //   const { APIKEY } = this.state;
  //   const inputField = document.querySelector('.search-field').value;
  //   const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&pageToken=${token}&maxResults=7&q=${inputField}`;
  // }
}
