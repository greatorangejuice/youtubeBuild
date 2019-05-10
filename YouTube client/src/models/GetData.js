export default class GetData {
  constructor(state) {
    this.state = state;
  }

  async getAllData() {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=8&q=${inputField}`;

    const response = await fetch(url);
    const data = await response.json();
    const snippets = data.items.map(snippet => snippet);

    console.log(data);
    console.log(snippets);
    return snippets;
  }

  async getNextPage(token) {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&pageToken=${token}&maxResults=7&q=${inputField}`;
  }
}
