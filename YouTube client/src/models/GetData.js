export default class GetData {
  constructor(state) {
    this.state = state;
    this.token = null;
  }

  async getAllData() {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    let url = '';
    if (this.token == null) {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=15&q=${inputField}`;
    } else {
      url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=15&q=${inputField}&pageToken=${this.token}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    const snippets = data.items;
    const { nextPageToken } = data;
    this.token = nextPageToken;

    const videosID = snippets.map(item => item.id.videoId);
    const ID = videosID.join();
    const statisticURL = `https://www.googleapis.com/youtube/v3/videos?key=${APIKEY}&id=${ID}&part=snippet,statistics`;
    const secondResponse = await fetch(statisticURL);
    const statistics = await secondResponse.json();
    const views = statistics.items.map(countView => countView.statistics.viewCount);
    for (let i = 0; i < snippets.length; i += 1) {
      snippets[i].views = views[i];
    }
    return { data: snippets, token: nextPageToken };
  }
}
