import { Angular2TruffleTemplatePage } from './app.po';

describe('angular2-truffle-template App', () => {
  let page: Angular2TruffleTemplatePage;

  beforeEach(() => {
    page = new Angular2TruffleTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
