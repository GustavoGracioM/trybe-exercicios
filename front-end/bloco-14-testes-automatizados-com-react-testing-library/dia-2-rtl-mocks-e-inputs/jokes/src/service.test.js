const service = require('./service');


describe("Exercicios dia 14.2", () => {

  it('Exercicio 1', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);
  });

});