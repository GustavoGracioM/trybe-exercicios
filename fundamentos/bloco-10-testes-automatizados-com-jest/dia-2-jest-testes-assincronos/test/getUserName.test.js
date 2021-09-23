const getUserName = require('../src/getUserName.js');

describe('Function promise getUserName()', () => {

  it('test if passing id 1 returns username Mark (promise)', () => {
    getUserName(1).then((data) => expect(data).toEqual('Mark'))
  })

  it('test if passing an incorrect id returns an error', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error).toEqual(new Error(`User with 3 not found.`)));
  });
});

describe('Function async/await getUserName()', () => {

  it('test if passing id 1 returns username Mark (async)', async () => {
    const nameUser = await getUserName(1);
    expect(nameUser).toBe('Mark');    
  })

  it('test if passing an incorrect id returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch(error) {
      expect(error).toEqual(new Error(`User with 3 not found.`));
    } 
  });
}); 