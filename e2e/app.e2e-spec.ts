import { TeretanaAngularPage } from './app.po';

describe('teretana-angular App', () => {
  let page: TeretanaAngularPage;

  beforeEach(() => {
    page = new TeretanaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
