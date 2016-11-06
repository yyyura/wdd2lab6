import { Lab6bPage } from './app.po';

describe('lab6b App', function() {
  let page: Lab6bPage;

  beforeEach(() => {
    page = new Lab6bPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
