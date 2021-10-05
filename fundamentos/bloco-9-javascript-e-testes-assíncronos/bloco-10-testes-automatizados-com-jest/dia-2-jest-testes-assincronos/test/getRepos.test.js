const getRepos = require('../src/getRepos.js');

describe('Function getRepos()', () => {

  it('gets a list of repositories names', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
})});