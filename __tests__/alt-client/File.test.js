const { File } = require('../../lib/mocks/alt-client');

let file;

describe('File', () => {
  beforeEach(() => {
    file = new File();
  });
  test('should exists()', () => {
    expect(file.exists()).toBe(false);
  });

  test('should read', () => {
    expect(file.read()).toBe('');
  });
});
