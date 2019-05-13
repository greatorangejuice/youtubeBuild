import GetData from './GetData';

describe('GetData.prototype.getAllData', () => {
  it('Should be return object with array', () => {
    expect(GetData.prototype.getAllData).toBeInstanceOf(Object);
  });
});
