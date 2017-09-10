import { IhirePage } from './app.po';

describe('ihire App', () => {
  let page: IhirePage;

  beforeEach(() => {
    page = new IhirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
