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
  });

  it('Exercicio 3', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);

    service.randomNumber.mockReset();

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });

  it('Exercicio 4', () => {
    service.upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
    service.firstLetter = jest.fn().mockImplementation((string) => string.charAt(string.length - 1));
    service.agroupString = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

    expect(service.upperCase('TRYBE')).toBe('trybe');
    expect(service.firstLetter('trybe')).toBe('e');
    expect(service.agroupString('Um', 'Dois', 'Tres')).toBe('Um Dois Tres');

    // service.upperCase.mockRestore();
    // expect(service.upperCase('trybe')).toBe('TRYBE');
  })

});