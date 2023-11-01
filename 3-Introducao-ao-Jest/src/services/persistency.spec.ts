import { Persistency } from './persistency';

describe('Persistency', () => {
  // limpa os mocks depois de cada teste -> para não dar erro nos dois ultimos testes
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = new Persistency(); // sut -> classe que está sendo testada
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
