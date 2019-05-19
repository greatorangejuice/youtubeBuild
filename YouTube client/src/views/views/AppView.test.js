import AppView from './AppView';

describe('AppView.prototype.render', () => {
  it('Should be an instance of function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    const context = {
      titles: [
        'test',
      ],
    };
    AppView.prototype.render.call(context);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
