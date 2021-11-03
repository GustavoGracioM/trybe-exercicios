const service = require('./service');


describe("Exercicios dia 14.2", () => {

  it('Exercicio 1', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);
  });

  it('Exercicio 2', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  })

});