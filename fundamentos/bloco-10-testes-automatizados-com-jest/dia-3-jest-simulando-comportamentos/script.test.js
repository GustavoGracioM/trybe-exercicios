const service = require('./script');

describe('randomNumber() function tests', () => {

  it('Exercise 1', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Exercise 2', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });

  it('Exercise 3.1', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    
    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

  it('Exercise 3.2', () => {
    service.randomNumber.mockReset();

    service.randomNumber.mockImplementation((a) => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });

  it('Exercise 5', () => {
    const lowerCase = jest
      .spyOn(service, "upperCase")
      .mockImplementation(a => a.toLowerCase());

    expect(lowerCase("TRYBE")).toBe("trybe");
    expect(lowerCase).toHaveBeenCalled();
    expect(lowerCase).toHaveBeenCalledTimes(1);
    expect(lowerCase).toHaveBeenCalledWith("TRYBE");
    
    service.upperCase.mockRestore();
    expect(service.upperCase("lowercase")).toBe("LOWERCASE");
   });
});

