module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    'alt-client': '<rootDir>/__mocks__/alt-client.cjs',
    'alt-server': '<rootDir>/__mocks__/alt-server.cjs',
    'natives': '<rootDir>/__mocks__/natives.cjs',
  }
}