export default class GetData {
  constructor(state) {
    this.state = state;
    this.testToken = null;
  }

  async getAllData() {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    let url = '';
    if (this.testToken == null) {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=8&q=${inputField}`;
    } else {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=8&q=${inputField}&pageToken=${this.testToken}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    const snippets = data.items.map(snippet => snippet);
    const { nextPageToken } = data;
    this.testToken = nextPageToken;

    const videosID = [];
    snippets.forEach((item) => {
      const { videoId } = item.id;
      videosID.push(videoId);
    });
    const ID = videosID.join();
    const statisticURL = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${ID}&part=snippet,statistics`;
    const secondResponse = await fetch(statisticURL);
    const statistics = await secondResponse.json();
    const views = statistics.items.map(countView => countView.statistics.viewCount);
    for (let i = 0; i < snippets.length; i += 1) {
      snippets[i].views = views[i];
    }
    return { data: snippets, token: nextPageToken };
  }
}
