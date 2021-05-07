const mock = {
  isInDebug: jest.fn().mockReturnValue(false),
  emit: jest.fn(),
  setMeta: jest.fn(),
};

module.exports = {
  __esModule: true,
  default: mock,
  ...mock,
};
