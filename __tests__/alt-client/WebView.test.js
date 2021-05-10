const { WebView } = require('../../lib/mocks/alt-client');

let webview;

describe('WebView', () => {
  beforeEach(() => {
    webview = new WebView();
  });

  test('should have properties', () => {
    expect(webview.url).toBe('');
    expect(webview.isVisible).toBe(false);
  });

  test('should unfocus', () => {
    expect(webview.unfocus()).toBeUndefined();
  });

  test('should emit', () => {
    expect(webview.emit()).toBeUndefined();
  });

  test('should on', () => {
    expect(webview.on()).toBeUndefined();
  });

  test('should off', () => {
    expect(webview.off()).toBeUndefined();
  });

  test('should focus', () => {
    expect(webview.focus()).toBeUndefined();
  });
});
