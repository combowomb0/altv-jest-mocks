const { resourceName, version, sdkVersion, branch } = require('../../lib/mocks/alt-client');

describe('Constants', () => {
  test('should have resourceName', () => {
    expect(resourceName).toBe('');
  });

  test('should have version', () => {
    expect(version).toBe('');
  });

  test('should have sdkVersion', () => {
    expect(sdkVersion).toBe(0);
  });

  test('should have branch', () => {
    expect(branch).toBe('');
  });
});
