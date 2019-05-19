import GetData from './GetData';

describe('GetData.prototype.getAllData', () => {
  it('Should be return object', () => {
    expect(GetData.prototype.getAllData).toBeInstanceOf(Object);
  });
});
