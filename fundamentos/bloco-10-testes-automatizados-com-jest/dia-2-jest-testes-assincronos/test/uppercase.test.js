const uppercase = require('../src/uppercase.js')

describe('Function uppercase()', () => {

  it('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (stringUppercase) => {
      try {
        expect(stringUppercase).toBe('TEST')
        done();
      } catch (error) {
        done(error);
      }
    } )
  });

});
