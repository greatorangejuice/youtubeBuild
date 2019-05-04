export default class GetData {
  constructor(state) {
    this.state = state;
  }

  // Сюда через state приходит URL.
  // Точнее, мы прокидываем сюда весь объект state, в котором есть заветный url.
  // Здесь же я запилю метод, который будет тянуть данные из первой data,
  // чтобы запустить второй запрос для лайков и прочего.
  static extractClipNames(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  async getClipNames() {
    const { url } = this.state;

    const response = await fetch(url);
    const data = await response.json();

    return GetData.extractClipNames(data);
  }
}
