export default class GetData {
  constructor(state) {
    this.state = state;
  }

  // Сюда через state приходит URL.
  // Точнее, мы прокидываем сюда весь объект state, в котором есть заветный url.
  // Здесь же я запилю метод, который будет тянуть данные из первой data,
  // чтобы запустить второй запрос для лайков и прочего.
  // static extractData(data) { // почему я не могу юзать async?
  //   console.log('ExtractData working here');
  //   const snippets = data.items.map(snippet => snippet);
  //   console.log('Snippets: ', snippets);
  // }

  async getAllData() {
    const { APIKEY } = this.state;
    const inputField = document.querySelector('.search-field').value;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=5&q=${inputField}`;

    const response = await fetch(url);
    const data = await response.json();
    const snippets = data.items.map(snippet => snippet);

    console.log(data);
    console.log(snippets);
    return snippets;
    // return GetData.extractData(data);
  }
}
