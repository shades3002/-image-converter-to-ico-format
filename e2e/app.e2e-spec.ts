import { ImageConverterToIcoFormatPage } from './app.po';

describe('image-converter-to-ico-format App', () => {
  let page: ImageConverterToIcoFormatPage;

  beforeEach(() => {
    page = new ImageConverterToIcoFormatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
