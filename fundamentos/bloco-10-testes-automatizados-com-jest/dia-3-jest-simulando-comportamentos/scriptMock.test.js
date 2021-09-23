const service = require('./script');
jest.mock("./script");

it('Exercise 4.1 - upperCase()', () => {
  service.upperCase.mockImplementationOnce(str => str.toLowerCase());

  expect(service.upperCase('TRYBE')).toBe('trybe');
  expect(service.upperCase).toHaveBeenCalled();
  expect(service.upperCase).toHaveBeenCalledTimes(1);
  expect(service.upperCase).toHaveBeenCalledWith('TRYBE');
});

it('Exercise 4.2', () => {
  service.firstLetter.mockImplementation((str) => str.charAt(str.length -1));

  expect(service.firstLetter('trybe')).toBe('e');
  expect(service.firstLetter).toHaveBeenCalled();
  expect(service.firstLetter).toHaveBeenCalledTimes(1);
  expect(service.firstLetter).toHaveBeenCalledWith('trybe');
});

it('Exercise 4.3', () => {
  service.concatenation.mockImplementation((a, b, c) =>  a.concat(b, c));

  expect(service.concatenation('v', 'q', 'v')).toBe('vqv');
  expect(service.concatenation).toHaveBeenCalled();
  expect(service.concatenation).toHaveBeenCalledTimes(1);
  expect(service.concatenation).toHaveBeenCalledWith('v', 'q', 'v');
});

describe('Exercise 6', () => {
  service.dogPictures = jest.fn();
  afterEach(service.dogPictures.mockReset);

  it('testa se requisição passou', async () => {
    service.dogPictures.mockResolvedValue("request sucess");

    service.dogPictures();
    expect(service.dogPictures).toHaveBeenCalled();
    expect(service.dogPictures).toHaveBeenCalledTimes(1);
    await expect(service.dogPictures()).resolves.toBe("request sucess");
    expect(service.dogPictures).toHaveBeenCalledTimes(2);
   });
  
  it('testa se a requisição deu erro', async () => {
    service.dogPictures.mockRejectedValue("request failed")

    expect(service.dogPictures).toHaveBeenCalledTimes(0);
    await expect(service.dogPictures()).rejects.toMatch("request failed");
    expect(service.dogPictures).toHaveBeenCalledTimes(1);
  });
});