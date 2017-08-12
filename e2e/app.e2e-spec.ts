import { AmonkPage } from './app.po';

describe('amonk App', function() {
  let page: AmonkPage;

  beforeEach(() => {
    page = new AmonkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
