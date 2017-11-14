import { Ng2HerokuDeployPage } from './app.po';

describe('ng2-heroku-deploy App', () => {
  let page: Ng2HerokuDeployPage;

  beforeEach(() => {
    page = new Ng2HerokuDeployPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
