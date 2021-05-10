const { RGBA } = require('../../lib/mocks/alt-client');

describe('RGBA', () => {
  let rgba = new RGBA();

  test('should have properties', () => {
    expect(rgba.a).toBe(0);
    expect(rgba.r).toBe(0);
    expect(rgba.g).toBe(0);
    expect(rgba.b).toBe(0);
  });
});
