import AppView from './AppView';
import InitialView from './InitialView';

describe('AppView.prototype.render', () => {
  it('Should be an instance of function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    InitialView.getInitialDom();
    const context = [
      {
        id: { kind: 'youtube#video', videoId: '0I647GU3Jsc' },
        snippet: {
          publishedAt: '2018-08-24T19:00:01.000Z',
          channelId: 'UCpx_k19S2vUutWUUM9qmXEg',
          title: 'Imagine Dragons - Natural',
          description: 'Descr',
          thumbnails: {
            medium: {
              url: 'https://url.jpg',
            },
          },
        },
        views: '229481471',
      },
      {
        id: { kind: 'youtube#video', videoId: '0I647GU3Jsc' },
        snippet: {
          publishedAt: '2018-08-24T19:00:01.000Z',
          channelId: 'UCpx_k19S2vUutWUUM9qmXEg',
          title: 'Imagine Dragons - Natural',
          description: 'Descr',
          thumbnails: {
            medium: {
              url: 'https://url.jpg',
            },
          },
        },
        views: '229481471',
      },
    ];
    AppView.prototype.render(context);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
